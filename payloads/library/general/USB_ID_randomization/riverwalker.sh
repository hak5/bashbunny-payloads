#!/bin/bash
#
#
#                         ...,:clddddddxO0Oxddxxxdoc:,'..                        
#                  ..,;:;:lkK0Oxoc:,'..oWMNo..';:ldk0K0dc;;;;,'.                 
#             .,:cc::;;:odxoc'.        lNMX:        .;lodoc,';::ccc;..           
#         .;lolc,.   ,dkd;.            lWMX;            .cxkl'   .,:lol:.        
#      .cxKKx:,'''':kNKo,''''''''''''',xWMNo'''''''''''''':xXKd:,,,',:dKKkl'     
#    'dOxc;;,,,,,lKNOc,,,,,,,,,,,,,,,,;kWMXo,,,,,,,,,,,,,,,,,lKWO:,','',,:dOx;   
#  .oKO;        .kNx.                  oWMK,                  ;0No.        'xKx' 
# .kNx.        .dWO'                   oWMK,                   :XXc         .oN0;
# dW0,         ;XWo.                  .xWMK;                   .OWk'         .kWO
# OM0c,,,,,,,,;xWNx;,,,,,,,,,,,,,,,,,,:OMMXo,,,,,,,,,,,,,,,,,;,:OMXl,,,,,,,,,;kWX
# xW0'         :XNl                   .xWM0'                   .kMO.         .xW0
# 'ONd.        .xWO.                  .xWMO'                   ;XNl          lXK:
#  .xXk'        'ONd.                 .xMMO.                  'ONd.        .dXO, 
#    ;xOd,.......cKWx,................;OMM0:.................:0WO;.......,lOk:.  
#      'lk00d:;,;;:oOX0o;,,,,,,,,,,,,,c0MMKl,,,,,,,,,,,,,,:xKXkc;;,,;:o0KOo;.    
#        .'cool;'.  .:xko'            .kMMk.            .;dOd,    .;cool,.       
#            .':ccc:;,,:oddl;.        .OMMk.        .':oddc,.';:ccc:,.           
#                 ..,;::;:o0XKkdl:,...,0MMk'...';:lxOXXkl:;;:;,'.                
#                        ..';codxkkkxdxKNX0ddxxkOOkxoc;,..                       
#
# Author: BlackPropaganda
# Description: Driver script for the RiverWalker extension.
# 
scriptDir=$(dirname $(readlink -f $0))
# calls python in local dir, avoids path nightmware.
echo $(python3 ${scriptDir}/riverwalker/riverwalker.py $1)
