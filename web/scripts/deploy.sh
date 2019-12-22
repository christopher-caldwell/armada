#!/bin/sh

source .env

Color_Off="\033[0m"       # Text Reset
# Bold High Intensty
BIBlack="\033[1;90m"      # Black
BIRed="\033[1;91m"        # Red
BIGreen="\033[1;92m"       # Green
BIYellow="\033[1;93m"     # Yellow
BIBlue="\033[1;94m"       # Blue
BIPurple="\033[1;95m"     # Purple
BICyan="\033[1;96m"       # Cyan
BIWhite="\033[1;97m"      # White

test=''
build=''
help=''

function run_tests(){
  printf "\n\n$BICyan$( echo Running tests.. )$Color_Off"
  printf "\n\n"

  npm run test:unit

  if [ $? == 0 ]
    then
      printf "\n\n$BIGreen$( echo Tests successful.. )$Color_Off"
    else
      printf "\n\n$BIRed$( echo Tests unsuccessful.. )$Color_Off"
      printf "\n\n"
      exit 1
  fi
}

function build_artifact(){
  printf "\n\n$BIYellow$( echo Building optimized version.. )$Color_Off"
  printf "\n\n"

  npm run build

  if [ $? == 0 ]
    then
      printf "\n\n$BIGreen$( echo Build successful.. )$Color_Off"
    else
      printf "\n\n$BIRed$( echo Build unsuccessful.. )$Color_Off"
      printf "\n\n"
      exit 1
  fi
}

function show_help() {
  printf "\n\n$BICyan$( echo 'List of Available Flags:' )$Color_Off"
  printf "\n\n$BIGreen$( echo '-t or --test:' )$Color_Off"
  printf "\n$BIYellow$( echo 'Runs the applications testing suite before deploying. Will exit if tests fail' )$Color_Off"
  printf "\n"
  printf "\n\n$BIGreen$( echo '-b or --build:' )$Color_Off"
  printf "\n$BIYellow$( echo 'Builds a fresh artifact before deploying using the .env.dev environment variables' )$Color_Off"
  printf "\n"
  printf "\n\n$BIGreen$( echo '-h or --help:' )$Color_Off"
  printf "\n$BIYellow$( echo 'Shows this printout' )$Color_Off"
  printf "\n\n"
  exit 0
}


################################################
############### Begin Script ###################
################################################

while [ ! $# -eq 0 ]
do
	case "$1" in
		--build | -b)
			build=true
			;;
		--test | -t)
			test=true
			;;
		--help | -h)
			help=true
			;;
	esac
	shift
done

################################################
############ Flag Evaluation ###################
################################################

if [ "$help" = "true" ] ; then
  show_help
fi

printf "\n\n$BICyan$( echo Starting script to deploy to $STAGE environment.. )$Color_Off"

if [ "$test" = "true" ] ; then
  run_tests
fi

if [ "$build" = "true" ] ; then
  build_artifact
fi

printf "\n\n$BICyan$( echo Deploying to the $STAGE s3 bucket.. )$Color_Off"

aws s3 sync \
  dist/ \
  s3://$S3_BUCKET \

if [ $? == 0 ]
  then
    printf "\n\n$BIGreen$( echo Deployment successful.. )$Color_Off"
    printf "\n\n"
  else
    printf "\n\n$BIRed$( echo Deployment unsuccessful.. )$Color_Off"
    printf "\n\n"
    exit 1
fi
