#!/bin/bash

function CUCUMBER() {
  case $1 in
    "ENABLE")
      echo ondemand | tee /sys/devices/system/cpu/cpu{0..3}/cpufreq/scaling_governor &> /dev/null
      echo 0 | tee /sys/devices/system/cpu/cpu{1..3}/online &> /dev/null
      ;;
    "DISABLE")
      echo 1 | tee /sys/devices/system/cpu/cpu{1..3}/online &> /dev/null
      sleep 2
      echo ondemand | tee /sys/devices/system/cpu/cpu{0..3}/cpufreq/scaling_governor &> /dev/null
      ;;
    "PLAID")
      echo 1 | tee /sys/devices/system/cpu/cpu{1..3}/online &> /dev/null
      sleep 2
      echo performance | tee /sys/devices/system/cpu/cpu{0..3}/cpufreq/scaling_governor &> /dev/null
      ;;
    *)
      LED FAIL
      exit 1
  esac
}

export -f CUCUMBER
