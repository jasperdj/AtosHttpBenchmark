var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60",
        "ok": "50",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "20054"
    },
    "maxResponseTime": {
        "total": "20100",
        "ok": "2049",
        "ko": "20100"
    },
    "meanResponseTime": {
        "total": "4216",
        "ok": "1045",
        "ko": "20070"
    },
    "standardDeviation": {
        "total": "7100",
        "ok": "427",
        "ko": "15"
    },
    "percentiles1": {
        "total": "1067",
        "ok": "963",
        "ko": "20066"
    },
    "percentiles2": {
        "total": "1761",
        "ok": "1277",
        "ko": "20082"
    },
    "percentiles3": {
        "total": "20071",
        "ok": "1858",
        "ko": "20095"
    },
    "percentiles4": {
        "total": "20093",
        "ok": "1988",
        "ko": "20099"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14,
        "percentage": 23
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 33
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.789",
        "ok": "0.657",
        "ko": "0.131"
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
        "total": "60",
        "ok": "50",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "20054"
    },
    "maxResponseTime": {
        "total": "20100",
        "ok": "2049",
        "ko": "20100"
    },
    "meanResponseTime": {
        "total": "4216",
        "ok": "1045",
        "ko": "20070"
    },
    "standardDeviation": {
        "total": "7100",
        "ok": "427",
        "ko": "15"
    },
    "percentiles1": {
        "total": "1067",
        "ok": "963",
        "ko": "20066"
    },
    "percentiles2": {
        "total": "1761",
        "ok": "1277",
        "ko": "20082"
    },
    "percentiles3": {
        "total": "20071",
        "ok": "1858",
        "ko": "20095"
    },
    "percentiles4": {
        "total": "20093",
        "ok": "1988",
        "ko": "20099"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14,
        "percentage": 23
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 33
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.789",
        "ok": "0.657",
        "ko": "0.131"
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
