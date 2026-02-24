function Message({ isAdmin }) {
  return (
    <div>
      {isAdmin ? <h2>Admin</h2> : <h2>Welcome User</h2>}
    </div>
  );
}

export default Message;