package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ResponsivityBenchmark_Ig extends Simulation {

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
    .baseURL("http://192.168.137.134:9000")

  val bk_responsivity = scenario("IG Responsivity")
    .exec(http("single client call")
      .post("/ig_scala/singleClient")
      .body(StringBody((s:Session) => s"""{ "clientId": ${randomId.toString}, "benchmarkInput": { "nodeId": """ + getId(s.userId.toString) + """, "forceExceptionChance": 0 } }""")).asJSON
      .extraInfoExtractor(extraInfo => List(extraInfo.response.body.string)))

  setUp(
    bk_responsivity.inject( rampUsersPerSec(1) to(1000) during(1 minutes))
  ).protocols(httpConf)
}