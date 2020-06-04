// eslint-disable @typescript-eslint/no-explicit-any

import { OK } from 'http-status-codes';

describe('ToDo', () => {
  interface ToDoType {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
    test: boolean;
  }

  let todosIdsArray: ToDoType[];

  //pincode = generateRandomPincode(); //This is how to use the global variable

  it('Get : should be able to fetch all Todo', () => {
    cy.request({
      method: 'GET',
      url: '/todos',
      headers: {
        accept: 'application/json'
      },
      body: {}
    }).then(async response => {
      const todosIds: any[] = [];
      todosIdsArray = [todosIdsArray, ...todosIds]; //This is a hack to instatiate the global variable to be used inside foreach
      assert.equal(response.status, OK);
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
      const responseBody: Array<ToDoType> = response.body;
      expect(responseBody).to.not.be.null;
      expect(responseBody).to.have.length(200);

      await responseBody.forEach(function(toDo: any) {
        todosIdsArray.push(toDo.id);
      });
    });
  });

  it('Get : should be able to fetch a single Todo', () => {
    cy.request({
      method: 'GET',
      url: `/todos/${todosIdsArray[5]}`,
      headers: {
        accept: 'application/json'
      },
      body: {}
    }).then(async (response: any) => {
      assert.equal(response.status, OK);
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8');
      expect(response.body).to.have.property('userId');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('completed');
    });
  });
});
