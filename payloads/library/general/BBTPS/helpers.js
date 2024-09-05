// Helper Modules
var jfs = require('fs');

function jobsParser(jobsObj, jbFldr){
    jbFldr = jbFldr + "/";
    var runType = ['thread','process'];
    if(jobsObj instanceof Array){
        var returnJob = new Array();
        for(i=0;i<jobsObj.length;i++){
            if(jfs.existsSync(jbFldr + jobsObj[i].scriptName) && runType.indexOf(jobsObj[i].runType.toLowerCase()) > -1){
                jobsObj[i].scriptName = jbFldr + jobsObj[i].scriptName;
                returnJob.push(jobsObj[i])
            }else{
                console.log("removing job, script file invalid");
            }
        }
    }else{
        if(jfs.existsSync(jbFldr + jobsObj.scriptName) && runType.indexOf(jobsObj.runType) > -1){
            jobsObj.scriptName = jbFldr + jobsObj.scriptName;
            var returnJob = jobsObj;
        }else{
            var returnJob = null;
            console.log('removing job, script file invalid');
        }
    }
    return returnJob;
}

exports.jobParser = jobsParser;