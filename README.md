use-global-fibrous
==================

A module that will try to require the global fibrous and tell you to install it if it isn't there

The reason for doing this is that you can't require different Fiber 
modules in the same node process at the same time. 


If a user does this wrong, which is easy to do by accident because of the 
way that npm works ( https://github.com/laverdet/node-fibers/issues/102 ), 
they will see a cryptic error message:
 `Error: TypeError: Cannot redefine property: future`

This module provides a saner error message and clear instructions on how 
to address the problem.



