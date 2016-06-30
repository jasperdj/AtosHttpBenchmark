var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45030",
        "ok": "27804",
        "ko": "17226"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "5",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "5873",
        "ok": "5817",
        "ko": "5873"
    },
    "meanResponseTime": {
        "total": "855",
        "ok": "997",
        "ko": "627"
    },
    "standardDeviation": {
        "total": "888",
        "ok": "728",
        "ko": "1059"
    },
    "percentiles1": {
        "total": "12",
        "ok": "469",
        "ko": "5"
    },
    "percentiles2": {
        "total": "685",
        "ok": "896",
        "ko": "7"
    },
    "percentiles3": {
        "total": "1287",
        "ok": "1287",
        "ko": "1283"
    },
    "percentiles4": {
        "total": "3526",
        "ok": "3305",
        "ko": "3690"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12075,
        "percentage": 27
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7810,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7919,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 17226,
        "percentage": 38
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "213.997",
        "ok": "132.133",
        "ko": "81.863"
    }
},
contents: {
"req_nothing-f80a4": {
        type: "REQUEST",
        name: "Nothing",
path: "Nothing",
pathFormatted: "req_nothing-f80a4",
stats: {
    "name": "Nothing",
    "numberOfRequests": {
        "total": "45030",
        "ok": "27804",
        "ko": "17226"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "5",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "5873",
        "ok": "5817",
        "ko": "5873"
    },
    "meanResponseTime": {
        "total": "855",
        "ok": "997",
        "ko": "627"
    },
    "standardDeviation": {
        "total": "888",
        "ok": "728",
        "ko": "1059"
    },
    "percentiles1": {
        "total": "12",
        "ok": "469",
        "ko": "5"
    },
    "percentiles2": {
        "total": "685",
        "ok": "896",
        "ko": "7"
    },
    "percentiles3": {
        "total": "1287",
        "ok": "1287",
        "ko": "1283"
    },
    "percentiles4": {
        "total": "3526",
        "ok": "3305",
        "ko": "3690"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12075,
        "percentage": 27
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7810,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7919,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 17226,
        "percentage": 38
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "213.997",
        "ok": "132.133",
        "ko": "81.863"
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
