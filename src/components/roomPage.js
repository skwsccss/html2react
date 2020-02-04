import React, { Component } from 'react';
import RoomHeader from './layout/roomHeader';
import RoomMain from './rooms/roomMain';
import MoreMenuPopup from './popupmenus/allModal/moreMenuPopup';
import MobileFriendList from './popupmenus/allModal/mobFriendListP';
import ChangeAvatar from './popupmenus/allModal/changeAvatar';
import SendGift from './popupmenus/allModal/sendGift';
import UpgradeMembership from './popupmenus/allModal/upgradeMembership';
import SayThanks from './popupmenus/allModal/sayThanks';
import Purchase from './popupmenus/allModal/purchase';
import ReceiveUpgrade from './popupmenus/allModal/receiveUpgrade';
import BanWindow from './popupmenus/allModal/banWindow';
import MuteWindow from './popupmenus/allModal/muteWindow';
import MuteSystem from './popupmenus/allModal/muteSystem';
import KickWindow from './popupmenus/allModal/kickWindow';
import KickSystem from './popupmenus/allModal/kickSystem';
import BanManagement from './popupmenus/allModal/ban/banManagement';
import UserReported from './popupmenus/allModal/userReported/userReported';
import SettingBox from './popupmenus/allModal/settingbox/settingBox';
import IgnoreList from './popupmenus/allModal/ignore/ignoreList';
import CreateGroup from './popupmenus/allModal/createGroup';
import SecSysSetting from './popupmenus/allModal/secSysSetting';
import ExceedLimit from './popupmenus/allModal/exceedLimit';
import SecWaitSystem from './popupmenus/allModal/secWaitSystem';
import SendAnnouncement from './popupmenus/allModal/sendAnnouncement';
import AnnouncementMsg from './popupmenus/allModal/announcementMsg';
import FriendRequest from './popupmenus/allModal/friendReq';
import CameraMic from './popupmenus/allModal/cameraMic';
import CountryBan from './popupmenus/allModal/countryBan';
import BannedSysMsg from './popupmenus/allModal/bannedSysMsg';
import Notification from './popupmenus/allModal/notification';
import PrivateMsgRec from './popupmenus/allModal/privateMsgRec';
import MyAccount from './popupmenus/allModal/myaccount/myAccount';
import VCurrencyShop from './popupmenus/allModal/virtualCurrency/vCurrencyShop';
import OpenChatPopup from './popupmenus/allModal/chatpopup/chatPopup';
import VideoBox1 from './popupmenus/allModal/videoBox1';
import VideoBox from './popupmenus/allModal/videoBox';
import PrivateChatPopup from './popupmenus/allModal/privateChat/privateChatP';
import GroupConversation from './popupmenus/allModal/groupConv/groupConv';
import GroupConverstationFull from './popupmenus/allModal/fullgroupconv/groupConvFull';
import UpgradeRoom from './popupmenus/allModal/upgradeRoom';
import Delete from './popupmenus/allModal/delete';
import Report from './popupmenus/allModal/report';
import Exit from './popupmenus/allModal/exit';
import ChangeGroupName from './popupmenus/allModal/changeGroupName';
import Logout from './popupmenus/allModal/logout';
import AboutApp from './popupmenus/allModal/aboutApp';
import TermsAndCondition from './popupmenus/allModal/terms';
import ContactUs from './popupmenus/allModal/contactUs';
import Help from './popupmenus/allModal/help';
import OpenChatMenu from './popupmenus/allModal/openChatMenu';
import Login from './popupmenus/allModal/login';
import Register from './popupmenus/allModal/Register';

class RoomPage extends Component {
    render() {
        return (
            <div className="page_container" id="containment-wrapper">
                <RoomHeader />
                <RoomMain />
                <MoreMenuPopup />
                <MobileFriendList />
                <Notification />
                <ChangeAvatar />
                <SendGift />
                <UpgradeMembership />
                <SayThanks />
                <Purchase />
                <ReceiveUpgrade />
                <BanWindow />
                <MuteWindow />
                <MuteSystem />
                <KickWindow />
                <KickSystem />
                <BanManagement />
                <UserReported />
                <SettingBox />
                <IgnoreList />
                <CreateGroup />
                <SecSysSetting />
                <ExceedLimit />
                <SecWaitSystem />
                <SendAnnouncement />
                <AnnouncementMsg />
                <FriendRequest />
                <CameraMic />
                <CountryBan />
                <BannedSysMsg />
                <PrivateMsgRec />
                <MyAccount />
                <VCurrencyShop />
                <OpenChatPopup />
                <VideoBox1 />
                <VideoBox />
                <PrivateChatPopup />
                <GroupConversation />
                <GroupConverstationFull />
                <UpgradeRoom />
                <Delete />
                <Report />
                <Exit />
                <ChangeGroupName />
                <Logout />
                <AboutApp />
                <TermsAndCondition />
                <ContactUs />
                <Help />
                <OpenChatMenu />
                <Login />
                <Register />
            </div>
        );
    }
}

export default RoomPage;