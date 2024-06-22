Feature: Counter

  Scenario: Increment the counter
    Given the counter is at 0
    When I click the increment button
    Then the counter should display 1

  Scenario: Decrement the counter
    Given the counter is at 0
    When I click the decrement button
    Then the counter should display -1
