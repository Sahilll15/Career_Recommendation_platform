import React from "react";
import RecentChat from "../components/Chat/RecentChat";
import Options from "../components/Chat/ChatHeader";
import GroupDiscussionLayout from "../components/Layout/GroupDiscussionLayout";

const Chat = () => {
    return (
        <div className="flex-grow bg-gray-100">
            <GroupDiscussionLayout>


                <Options />
                <RecentChat />

            </GroupDiscussionLayout>
        </div>
    );
};

export default Chat;
