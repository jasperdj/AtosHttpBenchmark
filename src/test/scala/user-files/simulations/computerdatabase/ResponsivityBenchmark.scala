package computerdatabase

import java.util.concurrent.atomic.AtomicInteger

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ResponsivityBenchmark extends Simulation {

  def random = scala.util.Random
  def randomId = random.nextInt(9)
  def randomEventType = random.nextInt(6) + 1

  def getId(str:String):Int = {
    println(str)
    val pattern = "-(\\d+)".r
    val list = pattern.findAllMatchIn(str).map(_.group(1)).toList
    list(list.length-1).toInt
  }

  val httpBenchmark = scenario("httpBenchmark")
    .exec(http("Nothing").get("/NOTHING"))
//    .exec(http("CPU").get("/CPU"))
//    .exec(http("MEMORY").get("/MEMORY"))

  val testScenario = scenario("wssServer")
    .exec(http("echo")
    .post("/echo")
    .body(StringBody("Hello"))
    .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))

  val bk_scala_responsivity = scenario("BK_Scala Responsivity") // A scenario is a chain of requests and pauses
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

  val bk_java_responsivity = scenario("BK_Java Responsivity") // A scenario is a chain of requests and pauses
    .exec(http("Insert") // Here's an example of a POST request
    .post("/bk_java/insert")
    .body(StringBody((s:Session) => s"""{ "spaceId": ${randomId.toString}, "messageId": ${randomId.toString}, "eventType": ${randomEventType.toString}, "nodeId": """ + getId(s.userId.toString) + """, "forceException": false }""")).asJSON
    .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get space statistic") // Here's an example of a POST request
      .post("/bk_java/spaceStatistics")
      .body(StringBody((s: Session) => s"""{ "spaceId": ${randomId.toString}, "nodeId": """ + (getId(s.userId.toString) * 3 + 1).toString + """, "forceException": false }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))
    .pause(100 milliseconds)
    .exec(http("Get message statistic") // Here's an example of a POST request
      .post("/bk_java/messageStatistics")
      .body(StringBody((s: Session) => s"""{ "messageId": ${randomId.toString}, "nodeId": """ + (getId(s.userId.toString) * 3 + 2).toString + """, "forceException": false }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))




val HttpServertest = scenario("HTTP test") // A scenario is a chain of requests and pauses
  .exec(http("Nothing") // Here's an example of a POST request
    .post("/NOTHING")
    .body(StringBody((s:Session) => s"""{ "forceException": false }""")).asJSON)
  .exec(http("Nothing") // Here's an example of a POST request
    .post("/NOTHING")
    .body(StringBody((s:Session) => s"""{ "forceException": false }""")).asJSON)
  .exec(http("Nothing") // Here's an example of a POST request
    .post("/NOTHING")
    .body(StringBody((s:Session) => s"""{ "forceException": false }""")).asJSON)
  .exec(http("Nothing") // Here's an example of a POST request
    .post("/NOTHING")
    .body(StringBody((s:Session) => s"""{ "forceException": false }""")).asJSON)
  .exec(http("Nothing") // Here's an example of a POST request
    .post("/NOTHING")
    .body(StringBody((s:Session) => s"""{ "forceException": false }""")).asJSON)

  setUp(
    HttpServertest.inject(
      rampUsersPerSec(1) to(200) during(1 minute)/*,
      nothingFor(1 minute),
      rampUsersPerSec(1) to(100) during(1 minute),
      nothingFor(1 minute),
      rampUsersPerSec(1) to(100) during(1 minute),
      nothingFor(1 minute),
      rampUsersPerSec(1) to(100) during(1 minute),
      nothingFor(1 minute),
      rampUsersPerSec(1) to(100) during(1 minute)*/
    )
  ).protocols(http.baseURL("http://127.0.0.1:9000"))
}

