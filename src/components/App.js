import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');
        return (
          <div className="ui container">
              <UserList/>
            <div>
                <button onClick={() => setResource('posts')} >Posts</button>
                <button onClick={() => setResource('todos')} >ToDos</button>
                <ResourceList resource={resource}/>
            </div>
              {resource}
          </div>
        );
};
export default App;