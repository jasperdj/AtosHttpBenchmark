package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation {

  def random = scala.util.Random
  def randomId = random.nextInt(9)
  def randomEventType = random.nextInt(6) + 1

  def getId(str:String):Int = {
    println(str)
    val pattern = "-(\\d+)".r
    val list = pattern.findAllMatchIn(str).map(_.group(1)).toList
    list(list.length-1).toInt
  }

  val httpConf = http
    .baseURL("http://127.0.0.1:9000") // Here is the root for all relative URLs


  val bk_responsivity = scenario("BK Responsivity") // A scenario is a chain of requests and pauses
    .exec(http("Insert") // Here's an example of a POST request
      .post("/bk_scala/insert")
      .body(StringBody((s:Session) => s"""{ "spaceId": ${randomId.toString}, "messageId": ${randomId.toString}, "eventType": ${randomEventType.toString}, "nodeId": """ + getId(s.userId.toString) + """, "forceException": false }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get space statistic") // Here's an example of a POST request
      .post("/bk_scala/spaceStatistics")
      .body(StringBody((s: Session) => s"""{ "spaceId": ${randomId.toString}, "nodeId": """ + (getId(s.userId.toString) * 3 + 1).toString + """, "forceException": false }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get message statistic") // Here's an example of a POST request
      .post("/bk_scala/messageStatistics")
      .body(StringBody((s: Session) => s"""{ "messageId": ${randomId.toString}, "nodeId": """ + (getId(s.userId.toString) * 3 + 2).toString + """, "forceException": false }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))

  setUp(
    bk_responsivity.inject( rampUsersPerSec(1) to(30) during(1 minutes))
  ).protocols(httpConf)
}

