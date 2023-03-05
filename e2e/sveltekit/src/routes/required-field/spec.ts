// FIXME: this test makes others fail, because pressing the getNull button causes server data to change

import { routes } from '../../lib/utils/routes.js';
import { expect_1_gql, expect_to_be, goto } from '../../lib/utils/testsHelper.js';
import { test } from '@playwright/test';

test.describe('required-field', () => {
  test('Get null and non-null required field', async ({ page }) => {
    await goto(page, routes.required_field);

    // When we arrive on the page, we expect to see null in the result div
    await expect_to_be(page, 'null');

    // we click on the button to get a user with non-null birthdate
    await expect_1_gql(page, 'button[id="getNonNull"]');
    // expect data (of AllUsers) to be displayed
    await expect_to_be(
      page,
      JSON.stringify(
        {
          user: {
            id: 'user-result-required:1',
            name: 'Bruce Willis',
            birthDate: '1955-03-19T00:00:00.000Z'
          }
        },
        null,
        2
      )
    );

    // we click on the button to get a user with null birthdate
    await expect_1_gql(page, 'button[id="getNull"]');
    // expect null user to be returned
    await expect_to_be(page, JSON.stringify({ user: null }, null, 2));
  });
});
