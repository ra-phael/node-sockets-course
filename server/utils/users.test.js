const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Joe',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jack',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        const user = {
            id: '123',
            name: 'Andrew',
            room: 'A room'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let removed = users.removeUser('2');
        
        expect(removed.id).toBe('2');
        expect(users.users.length).toBe(2);

    });
    
    it('should not remove a user', () => {
        users.removeUser('4');
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let found = users.getUser('2');
        expect(found.name).toBe('Jack');
    });

    it('should not find a user', () => {
        let found = users.getUser('1324');
        expect(found).toBeFalsy();
    });

    it('should return names for Node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Joe', 'Julie']);
    })
})