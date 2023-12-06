//
//  Processes.c
//  ITSC 2181
//


/*
 @file Processes.c
 @author Katrina Wilson, kwils178@uncc.edu
 @course: ITSC 2181
 @assignment: Module 07 Lab
 */


#include "Processes.h"
#include <stdlib.h>

// Part 1: Working With Process IDs
pid_t getProcessID(void)
{
   return getpid();
}


// Part 2: Working With Multiple Processes
char* createNewProcess(void)
{
   pid_t id = fork();
   
   // DO NOT CHANGE THIS LINE OF CODE
   process_id = id;
   
   
   if(id == -1)
   {
      return "Error creating process";
   }
   else if (id == 0)
   {
      pid_t childPID= getpid();
      printf("I am a child process!");
      return "I am bored of my parent, switching programs now";
   }
   else
   {
      printf("I just became a parent!");
      int status;
      waitpid(id, &status, 0);
      return "My child process just terminated!";
   }
}


// Part 3: Working With External Commands"
void replaceProcess(char * args[])
{
   // Spawn a process to execute the user's command.
   pid_t id = fork();
   
   
   if (id == -1) {
	printf("Error creating process");
	exit(EXIT_FAILURE);
} else if (id == 0) {
	if (execvp(args[0], args)== -1) {
	printf("Error executing command");
	exit(EXIT_FAILURE);
}} else {
	int status;
	waitpid(id, &status, 0);
	exit(EXIT_SUCCESS);
}

}