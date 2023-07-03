import { parseAllure } from 'allure-js-parser';
import { ExecutableItem } from 'allure-js-commons';
import path from 'path';
import { createResTest } from '../../cy-helper/utils';

jest.setTimeout(70000);

describe('run retries test', () => {
  const storeResDir = createResTest(__filename);

  it(`check ${storeResDir}`, async () => {
    const results = parseAllure(storeResDir);
    const date = Date.parse('10 Dec 2011');

    const replaceSteps = (steps: ExecutableItem[]): any[] => {
      if (steps.length === 0) {
        return [];
      }

      return steps.map(s => ({ ...s, start: date, stop: date + 11, steps: replaceSteps(s.steps) }));
    };

    const resFixed = results.map(r => {
      return {
        ...r,
        historyId: 'no',
        uuid: 'no',
        start: date,
        stop: date + 10,
        parent: { ...r.parent, uuid: 'no' },
        steps: replaceSteps(r.steps),
        attachments: r.attachments.map(t => ({ ...t, source: `source${path.extname(t.source)}` })),
      };
    });

    expect(resFixed).toEqual([
      {
        attachments: [
          {
            // todo: should not contain for passed test?
            name: 'retries pass on second retry -- should pass on retries (failed).png',
            source: 'source.png',
            type: 'image/png',
          },
          {
            name: 'retries-pass.cy.ts',
            source: 'source.mp4',
            type: 'video/mp4',
          },
        ],
        descriptionHtml: 'integration/e2e/retries/retries-pass.cy.ts',
        fullName: 'retries: pass on second retry should pass on retries',
        historyId: 'no',
        labels: [
          {
            name: 'package',
            value: 'retries: pass on second retry',
          },
          {
            name: 'parentSuite',
            value: 'retries: pass on second retry',
          },
          {
            name: 'path',
            value: 'integration/e2e/retries/retries-pass.cy.ts',
          },
        ],
        links: [],
        name: 'should pass on retries',
        parameters: [],
        parent: {
          afters: [],
          befores: [],
          name: 'retries: pass on second retry',
          uuid: 'no',
        },
        stage: 'finished',
        start: 1323460800000,
        status: 'failed',
        statusDetails: {
          message: 'Expected [ <div>, 1 more... ] not to exist in the DOM, but it was continuously found.',
          trace:
            'AssertionError: Expected [ <div>, 1 more... ] not to exist in the DOM, but it was continuously found.\n    at Context.eval (webpack://@mmisty/cypress-allure-adapter/./integration/e2e/retries/retries-pass.cy.ts:10:9)',
        },
        steps: [
          {
            attachments: [],
            name: '"before each" hook',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [
              {
                attachments: [],
                name: 'log: log, Registered allureAdapterSetup',
                parameters: [],
                stage: 'pending',
                start: 1323460800000,
                status: 'passed',
                statusDetails: {},
                steps: [],
                stop: 1323460800011,
              },
            ],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'route: undefined',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'visit: mytest.com',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'get: div',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'should: not.exist',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'failed',
            statusDetails: {},
            steps: [
              {
                attachments: [],
                name: 'assert: expected **[ <div>, 1 more... ]** not to exist in the DOM',
                parameters: [],
                stage: 'pending',
                start: 1323460800000,
                status: 'failed',
                statusDetails: {},
                steps: [],
                stop: 1323460800011,
              },
            ],
            stop: 1323460800011,
          },
        ],
        stop: 1323460800010,
        uuid: 'no',
      },
      {
        attachments: [
          {
            name: 'retries pass on second retry -- should pass on retries (failed).png',
            source: 'source.png',
            type: 'image/png',
          },
          {
            name: 'retries-pass.cy.ts',
            source: 'source.mp4',
            type: 'video/mp4',
          },
        ],
        descriptionHtml: 'integration/e2e/retries/retries-pass.cy.ts',
        fullName: 'retries: pass on second retry should pass on retries',
        historyId: 'no',
        labels: [
          {
            name: 'package',
            value: 'retries: pass on second retry',
          },
          {
            name: 'parentSuite',
            value: 'retries: pass on second retry',
          },
          {
            name: 'path',
            value: 'integration/e2e/retries/retries-pass.cy.ts',
          },
        ],
        links: [],
        name: 'should pass on retries',
        parameters: [],
        parent: {
          afters: [],
          befores: [],
          name: 'retries: pass on second retry',
          uuid: 'no',
        },
        stage: 'finished',
        start: 1323460800000,
        status: 'passed',
        statusDetails: {},
        steps: [
          {
            attachments: [],
            name: '"before each" hook',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [
              {
                attachments: [],
                name: 'log: log, Registered allureAdapterSetup',
                parameters: [],
                stage: 'pending',
                start: 1323460800000,
                status: 'passed',
                statusDetails: {},
                steps: [],
                stop: 1323460800011,
              },
            ],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'route: undefined',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [],
            stop: 1323460800011,
          },
          {
            attachments: [],
            name: 'visit: mytest.com',
            parameters: [],
            stage: 'pending',
            start: 1323460800000,
            status: 'passed',
            statusDetails: {},
            steps: [],
            stop: 1323460800011,
          },
        ],
        stop: 1323460800010,
        uuid: 'no',
      },
    ]);
  });
});
