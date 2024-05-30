import Svg from "../../assets/Svgs/Svg";

const Sidebar = ({ messagesList }) => {
  return (
    <>
      <div className="text-center py-5">
        <h6 className="fw-bold">Let's Explore!</h6>
        <small className="text-small">
          Have a question about Knowledge Base Documents?
        </small>
      </div>

      <div>
        <h6 className="fw-bold text-center">Your Activity</h6>
        {messagesList?.length > 0 ? (
          messagesList.map((msg, index) => (
            <div key={index} className="px-3 text-truncate">
              <small>
                {Svg.chatBubble} {msg}
              </small>
            </div>
          ))
        ) : (
          <div className="text-center">
            <small>No Activities!!</small>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
