var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "15050",
        "ko": "14950"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1268",
        "ok": "1268",
        "ko": "1214"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "19",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "93",
        "ko": "28"
    },
    "percentiles1": {
        "total": "3",
        "ok": "2",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles3": {
        "total": "10",
        "ok": "9",
        "ko": "10"
    },
    "percentiles4": {
        "total": "155",
        "ok": "205",
        "ko": "125"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14947,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 75,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 28,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 14950,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "225.701",
        "ok": "113.227",
        "ko": "112.475"
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
        "ok": "15050",
        "ko": "14950"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1268",
        "ok": "1268",
        "ko": "1214"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "19",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "93",
        "ko": "28"
    },
    "percentiles1": {
        "total": "3",
        "ok": "2",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles3": {
        "total": "10",
        "ok": "9",
        "ko": "10"
    },
    "percentiles4": {
        "total": "155",
        "ok": "205",
        "ko": "125"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14947,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 75,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 28,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 14950,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "225.701",
        "ok": "113.227",
        "ko": "112.475"
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
