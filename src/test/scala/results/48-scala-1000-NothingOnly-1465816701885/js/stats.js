var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30030",
        "ok": "18276",
        "ko": "11754"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "4",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "2162",
        "ok": "2162",
        "ko": "1798"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "397",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "366",
        "ko": "91"
    },
    "percentiles1": {
        "total": "39",
        "ok": "314",
        "ko": "4"
    },
    "percentiles2": {
        "total": "413",
        "ok": "626",
        "ko": "5"
    },
    "percentiles3": {
        "total": "882",
        "ok": "1005",
        "ko": "8"
    },
    "percentiles4": {
        "total": "1561",
        "ok": "1658",
        "ko": "16"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15978,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1623,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 675,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 11754,
        "percentage": 39
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "206.403",
        "ok": "125.615",
        "ko": "80.788"
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
        "total": "30030",
        "ok": "18276",
        "ko": "11754"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "4",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "2162",
        "ok": "2162",
        "ko": "1798"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "397",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "366",
        "ko": "91"
    },
    "percentiles1": {
        "total": "40",
        "ok": "314",
        "ko": "4"
    },
    "percentiles2": {
        "total": "413",
        "ok": "626",
        "ko": "5"
    },
    "percentiles3": {
        "total": "882",
        "ok": "1005",
        "ko": "8"
    },
    "percentiles4": {
        "total": "1561",
        "ok": "1657",
        "ko": "16"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15978,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1623,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 675,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 11754,
        "percentage": 39
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "206.403",
        "ok": "125.615",
        "ko": "80.788"
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
