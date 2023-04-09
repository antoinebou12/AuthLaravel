# AuthLaravel

## Description

This is a simple project to learn how to use Laravel and Vue.js GTI619 LAB 5

![your-UML-diagram-name](http://www.plantuml.com/plantuml/dpng/PL3BQWCn3BpxAzGzjRHxwDMdBMplfOyFCBjgA_0Zs384GluzMX5YXxtO6aapdl5Ks6MkmPi7_iU0492TDsRnhXJuOV9K76FDS3808wqMAF9MnXGi5CuK_pOO4i_u8IJikpbvmPzoclDLL96gzH9j_5R5I6JwfSKnfQYhp-xMnVpOyLvW__2JxOqtvIyiHGHRakQpjlrxiinMgTwF1yfgny8i-9k29ke_Q7WTO1prqi2x83BifTNElZrXN6lm5m00)

![](http://www.plantuml.com/plantuml/duml/XP5HIiSm3CRVUue-Tk0kC4Gcp0SV154yGEmo3MpfI5FnIfx3Yqb7cMuM_e_vylMNVaaV5KJJCXlm6iI-ACqKGJ69MK6KFAt0Qc-JlYChJUH1AV2X-OmndhMdCACnVt2slVb7wIpi2ehZi5pP9UY0Zn0ZDkRihpC-lhza0ppiJzqbIlvUPyEh8fFa8W-lMqkwpdf1b5Avz9kiCKKykD-GKL3k1rVlZpWHaznzhYJRBDSSrdNTjfMiiQowHnxprNu0)

## Installation

### Requirements

- Docker
- Docker Compose
- Node.js
- NPM
- PHP 8.1.2
- Composer

### Steps

```shell
./vendor/bin/sail up -d
npm build
./vendor/bin/sail artisan migrate
./vendor/bin/sail artisan db:seed
http://localhost/login
email: http://localhost:8025
```

## Usage

### Login

- email/username:
- password:

### Register

- email:
- username:
- phone:
- password:
- password_confirmation:

### Reset password

- email:

### Change password

- old_password:
- password:

## Project

### Description

Part 1 : Implementation of an access management
This application must implement an RBAC (« Role Base Access Control ») access management. This access management model must contain the following three roles:

- Administrator
- Residential customer service representative
- Business customer service representative

You must create the following three users:

- « Administrator », who will have the « Administrator » role.
- « User1 », who will have the « Residential customer service representative » role.
- « User2 », who will have the « Business customer service representative » role.

This application must also contain the following elements:

- A page allowing the user to authenticate.
- An administration page to configure security options. The security options to be configured are indicated in part 2 below, under the « Parameter » column of the table. This or these page (s) must be visible only for the « Administrator » role
- A page that displays a list of residential customers from a database, this page must be visible to the « Residential customer service representative » and « Administrator » roles
- A page that displays a list of business customers from a database, this page must be visible to the « Business customer service representative » and « Administrator » roles

Part 2 : Implementation of authentication
The implementation of your authentication must meet the following objectives:

- Communication protocol and information exchange
- Authentication information protection
- Massive attack prevention
- User delay based on the number of unsuccessful attempts
- Password management
- Password standard configuration
- Secure password storage
- Connection logging, security-related changes

Part 3 : Session management

- Session identifier protection
- Session timeout
- Session termination
- Session hijacking prevention
- Session fixation prevention
- Session identifier regeneration
- Session identifier transmission
- Session identifier storage
- Session identifier protection

Part 4 : Password management

- Password complexity
- Password length
- Password storage
- Password protection
- Password change
- Password reset
- Password recovery
- Password history
- Password expiration

https://www.owasp.org/index.php/Authentication_Cheat_Sheet
http://machinesaredigging.com/2013/10/29/how-does-a-web-session-work/ -->
