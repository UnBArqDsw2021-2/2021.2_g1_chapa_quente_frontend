import React from 'react';

function Header({ currentUser, logout }) { // eslint-disable-line no-shadow
  const history = useHistory();
  const [hidden, setHidden] = useState(true);

  return (<Header>
    <p>Testando</p>
  </Header>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);