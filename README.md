# Lab 8 - Starter

Name: Kian Ezaz

1. Within a Github action that runs whenever code is pushed.

2. No.

3. No, a unit test is not appropriate to test the "message" feature. This is because messaging requires several functions and components to interact with each other like those that correspond to different users. So, a messaging feature is not an encapsulated unit. Instead, it is a feature that requires testing by emulating user actions from start to finish (E2E testing).

4. Yes, a unit test would be appropriate to test this feature because it likely only requires validating a single function rather than a sequence of user actions, meaning that the feature is an encapsulated unit.