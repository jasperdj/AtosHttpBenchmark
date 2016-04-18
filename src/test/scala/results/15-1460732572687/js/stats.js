var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "598",
        "ko": "602"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "6",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "267",
        "ok": "267",
        "ko": "49"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "21",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "28",
        "ko": "5"
    },
    "percentiles1": {
        "total": "10",
        "ok": "14",
        "ko": "8"
    },
    "percentiles2": {
        "total": "16",
        "ok": "21",
        "ko": "11"
    },
    "percentiles3": {
        "total": "36",
        "ok": "59",
        "ko": "20"
    },
    "percentiles4": {
        "total": "118",
        "ok": "167",
        "ko": "30"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 598,
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
        "count": 602,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.01",
        "ok": "9.972",
        "ko": "10.039"
    }
},
contents: {
"req_insert-a458b": {
        type: "REQUEST",
        name: "Insert",
path: "Insert",
pathFormatted: "req_insert-a458b",
stats: {
    "name": "Insert",
    "numberOfRequests": {
        "total": "1200",
        "ok": "598",
        "ko": "602"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "6",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "267",
        "ok": "267",
        "ko": "49"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "21",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "28",
        "ko": "5"
    },
    "percentiles1": {
        "total": "10",
        "ok": "14",
        "ko": "8"
    },
    "percentiles2": {
        "total": "16",
        "ok": "21",
        "ko": "10"
    },
    "percentiles3": {
        "total": "36",
        "ok": "59",
        "ko": "20"
    },
    "percentiles4": {
        "total": "118",
        "ok": "167",
        "ko": "30"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 598,
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
        "count": 602,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.01",
        "ok": "9.972",
        "ko": "10.039"
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
