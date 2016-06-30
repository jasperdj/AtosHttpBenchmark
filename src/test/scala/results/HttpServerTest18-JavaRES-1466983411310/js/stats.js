var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "15156",
        "ko": "14844"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "870",
        "ok": "870",
        "ko": "288"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "4",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "24",
        "ko": "7"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "percentiles2": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "percentiles3": {
        "total": "3",
        "ok": "3",
        "ko": "2"
    },
    "percentiles4": {
        "total": "18",
        "ok": "44",
        "ko": "8"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15154,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 14844,
        "percentage": 49
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "452.516",
        "ok": "228.611",
        "ko": "223.905"
    }
},
contents: {
"req_nothing-3e47b": {
        type: "REQUEST",
        name: "nothing",
path: "nothing",
pathFormatted: "req_nothing-3e47b",
stats: {
    "name": "nothing",
    "numberOfRequests": {
        "total": "30000",
        "ok": "15156",
        "ko": "14844"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "870",
        "ok": "870",
        "ko": "288"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "4",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "24",
        "ko": "7"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "percentiles2": {
        "total": "2",
        "ok": "2",
        "ko": "2"
    },
    "percentiles3": {
        "total": "3",
        "ok": "3",
        "ko": "2"
    },
    "percentiles4": {
        "total": "18",
        "ok": "44",
        "ko": "8"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15154,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 14844,
        "percentage": 49
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "452.516",
        "ok": "228.611",
        "ko": "223.905"
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
