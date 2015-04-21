# spring-react-isomorphic
Spring + React isomorphic templating application

More details about Spring Script Templating at https://jira.spring.io/browse/SPR-12266.

## How to run it ?

 * git clone https://github.com/sdeleuze/spring-framework.git
 * cd spring-framework
 * git checkout SPR-12266
 * ./gradlew clean install -x javadoc
 * cd ..
 * git clone https://github.com/sdeleuze/spring-react-isomorphic.git
 * Import in your IDE (Enable Java 8 syntax support)
 * Run IsomorphicApplication mainb class

Warning: the application does not work when packaged as a Spring Boot fat JAR or WAR.
