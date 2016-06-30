package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ResilliencyBenchmark extends Simulation {

  val httpConf = http.baseURL("http://127.0.0.1:9000")

  def random = scala.util.Random
  def randomId = random.nextInt(9)
  def randomEventType = random.nextInt(6) + 1


  val max = 30000
  def ratio(i:Int):Double = (max-i)/max
  def randomUser = random.nextInt(max)

  def toForceException(i:Int):Boolean = {
    randomUser < i
    //false
  }

  def getId(str:String):Int = {
    println(str)
    val pattern = "-(\\d+)".r
    val list = pattern.findAllMatchIn(str).map(_.group(1)).toList
    list(list.length-1).toInt
  }

  val bk_java_responsivity = scenario("BK Responsivity")
    .exec(http("Insert")
      .post("/bk_java/insert")
      .body(StringBody((s:Session) => s"""{ "spaceId": $randomId, "messageId": $randomId, "eventType": $randomEventType, "nodeId": """ + (getId(s.userId.toString) * 3) + """, "forceException": """+toForceException(getId(s.userId.toString) * 3 % max).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get space statistic") // Here's an example of a POST request
      .post("/bk_java/spaceStatistics")
      .body(StringBody((s: Session) => s"""{ "spaceId": $randomId, "nodeId": """ + (getId(s.userId.toString) * 3 + 1) + """, "forceException": """+toForceException(((getId(s.userId.toString) * 3 + 1) % max).toInt).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get message statistic") // Here's an example of a POST request
      .post("/bk_java/messageStatistics")
      .body(StringBody((s: Session) => s"""{ "messageId": $randomId, "nodeId": """ + (getId(s.userId.toString) * 3 + 2) + """, "forceException": """+toForceException(((getId(s.userId.toString) * 3 + 2) % max).toInt).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))

  val bk_scala_responsivity = scenario("BK Responsivity")
    .exec(http("Insert")
      .post("/bk_scala/insert")
      .body(StringBody((s:Session) => s"""{ "spaceId": $randomId, "messageId": $randomId, "eventType": $randomEventType, "nodeId": """ + (getId(s.userId.toString) * 3) + """, "forceException": """+toForceException(getId(s.userId.toString) * 3 % max).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get space statistic") // Here's an example of a POST request
      .post("/bk_scala/spaceStatistics")
      .body(StringBody((s: Session) => s"""{ "spaceId": $randomId, "nodeId": """ + (getId(s.userId.toString) * 3 + 1) + """, "forceException": """+toForceException(((getId(s.userId.toString) * 3 + 1) % max).toInt).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get message statistic") // Here's an example of a POST request
      .post("/bk_scala/messageStatistics")
      .body(StringBody((s: Session) => s"""{ "messageId": $randomId, "nodeId": """ + (getId(s.userId.toString) * 3 + 2) + """, "forceException": """+toForceException(((getId(s.userId.toString) * 3 + 2) % max).toInt).toString+""" }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))


  val HttpServerTest = scenario("Http server test")
    .exec(http("nothing")
      .post("/NOTHING")
      .body(StringBody((s:Session) => s"""{ "forceException": """+toForceException(getId(s.userId.toString) * 5 % max).toString+""" }""")).asJSON)
    .exec(http("nothing")
      .post("/NOTHING")
      .body(StringBody((s:Session) => s"""{ "forceException": """+toForceException(getId(s.userId.toString) * 5 + 1 % max).toString+""" }""")).asJSON)
    .exec(http("nothing")
      .post("/NOTHING")
      .body(StringBody((s:Session) => s"""{ "forceException": """+toForceException(getId(s.userId.toString) * 5 + 2 % max).toString+""" }""")).asJSON)
    .exec(http("nothing")
      .post("/NOTHING")
      .body(StringBody((s:Session) => s"""{ "forceException": """+toForceException(getId(s.userId.toString) * 5 + 3 % max).toString+""" }""")).asJSON)
    .exec(http("nothing")
      .post("/NOTHING")
      .body(StringBody((s:Session) => s"""{ "forceException": """+toForceException(getId(s.userId.toString) * 5 + 4 % max).toString+""" }""")).asJSON)



  setUp(
    HttpServerTest.inject(
      constantUsersPerSec(100) during(1 minute)/*,
      nothingFor(1 minute),
      constantUsersPerSec(30) during(1 minute),
      nothingFor(1 minute),
      constantUsersPerSec(30) during(1 minute),
      nothingFor(1 minute),
      constantUsersPerSec(30) during(1 minute),
      nothingFor(1 minute),
      constantUsersPerSec(30) during(1 minute),
      nothingFor(1 minute)*/
    )
  ).protocols(httpConf)
}

