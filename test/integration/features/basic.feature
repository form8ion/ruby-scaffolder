Feature: Simplest Use

  Scenario: Minimal Options
    Given the default answers are chosen
    When the project is scaffolded
#    Then the expected files are generated
    Then the expected results are returned to the project scaffolder
