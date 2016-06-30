var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "14999",
        "ko": "15001"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "180"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "4",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "11",
        "ko": "3"
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
        "ko": "3"
    },
    "percentiles4": {
        "total": "45",
        "ok": "64",
        "ko": "11"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14999,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 15001,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "456.857",
        "ok": "228.413",
        "ko": "228.444"
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
        "ok": "14999",
        "ko": "15001"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "180"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "4",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "11",
        "ko": "3"
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
        "ko": "3"
    },
    "percentiles4": {
        "total": "45",
        "ok": "64",
        "ko": "10"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14999,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 15001,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "456.857",
        "ok": "228.413",
        "ko": "228.444"
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
