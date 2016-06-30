var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "930",
        "ok": "68",
        "ko": "862"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "20034"
    },
    "maxResponseTime": {
        "total": "20804",
        "ok": "1231",
        "ko": "20804"
    },
    "meanResponseTime": {
        "total": "18618",
        "ok": "223",
        "ko": "20069"
    },
    "standardDeviation": {
        "total": "5167",
        "ok": "223",
        "ko": "88"
    },
    "percentiles1": {
        "total": "20046",
        "ok": "143",
        "ko": "20046"
    },
    "percentiles2": {
        "total": "20056",
        "ok": "276",
        "ko": "20057"
    },
    "percentiles3": {
        "total": "20164",
        "ok": "591",
        "ko": "20186"
    },
    "percentiles4": {
        "total": "20492",
        "ok": "1101",
        "ko": "20494"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 65,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 862,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.628",
        "ok": "0.85",
        "ko": "10.778"
    }
},
contents: {
"req_single-client-c-cbd1a": {
        type: "REQUEST",
        name: "single client call",
path: "single client call",
pathFormatted: "req_single-client-c-cbd1a",
stats: {
    "name": "single client call",
    "numberOfRequests": {
        "total": "930",
        "ok": "68",
        "ko": "862"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "20034"
    },
    "maxResponseTime": {
        "total": "20804",
        "ok": "1231",
        "ko": "20804"
    },
    "meanResponseTime": {
        "total": "18618",
        "ok": "223",
        "ko": "20069"
    },
    "standardDeviation": {
        "total": "5167",
        "ok": "223",
        "ko": "88"
    },
    "percentiles1": {
        "total": "20046",
        "ok": "143",
        "ko": "20046"
    },
    "percentiles2": {
        "total": "20056",
        "ok": "276",
        "ko": "20057"
    },
    "percentiles3": {
        "total": "20164",
        "ok": "591",
        "ko": "20186"
    },
    "percentiles4": {
        "total": "20492",
        "ok": "1101",
        "ko": "20494"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 65,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 862,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.628",
        "ok": "0.85",
        "ko": "10.778"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
