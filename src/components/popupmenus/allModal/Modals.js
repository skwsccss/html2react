import React from 'react'
import { connect } from 'react-redux';
import * as types from '../../../actions/actionConstants'

//Import Modals
import MoreMenuPopup from './moreMenuPopup'
import MobileFriendList from './mobFriendListP';
import ChangeAvatar from './changeAvatar';
import SendGift from './sendGift';
import UpgradeMembership from './upgradeMembership';
import SayThanks from './sayThanks';
import Purchase from './purchase';
import ReceiveUpgrade from './receiveUpgrade';
import BanWindow from './banWindow';
import MuteWindow from './muteWindow';
import MuteSystem from './muteSystem';
import KickWindow from './kickWindow';
import KickSystem from './kickSystem';
import BanManagement from './ban/banManagement';
import UserReported from './userReported/userReported';
import SettingBox from './settingbox/settingBox';
import IgnoreList from './ignore/ignoreList';
import CreateGroup from './createGroup';
import SecSysSetting from './secSysSetting';
import ExceedLimit from './exceedLimit';
import SecWaitSystem from './secWaitSystem';
import SendAnnouncement from './sendAnnouncement';
import AnnouncementMsg from './announcementMsg';
import FriendRequest from './friendReq';
import CameraMic from './cameraMic';
import CountryBan from './countryBan';
import BannedSysMsg from './bannedSysMsg';
import Notification from './notification';
import PrivateMsgRec from './privateMsgRec';
import MyAccount from './myaccount/myAccount';
import Notice from './notice';
import VCurrencyShop from './virtualCurrency/vCurrencyShop';
import OpenChatPopup from './chatpopup/chatPopup';
import VideoBox1 from './videoBox1';
import VideoBox from './videoBox';
import PrivateChatPopup from './privateChat/privateChatP';
import GroupConversation from './groupConv/groupConv';
import GroupConverstationFull from './fullgroupconv/groupConvFull';
import UpgradeRoom from './upgradeRoom';
import Delete from './delete';
import Report from './report';
import Exit from './exit';
import ChangeGroupName from './changeGroupName';
import Logout from './logout';
import AboutApp from './aboutApp';
import TermsAndCondition from './terms';
import ContactUs from './contactUs';
import Help from './help';
import OpenChatMenu from './openChatMenu';

const ModalConductor = props => {
    switch (props.modalName) {
        case types.MORE_MENU_POPUP:
            return <MoreMenuPopup />
        case types.MOBILE_FRIEND_LIST:
            return <MobileFriendList />
        case types.NOTIFICATION:
            return <Notification />
        case types.CHANGE_AVATAR:
            return <ChangeAvatar />
        case types.SEND_GIFT:
            return <SendGift />
        case types.UPGRADE_MEMBERSHIP:
            return <UpgradeMembership />
        case types.SAY_THANKS:
            return <SayThanks />
        case types.PURCHASE:
            return <Purchase />
        case types.RECEIVE_UPGRADE:
            return <ReceiveUpgrade />
        case types.BAN_WINDOW:
            return <BanWindow />
        case types.MUTE_WINDOW:
            return <MuteWindow />
        case types.MUTE_SYSTEM:
            return <MuteSystem />
        case types.KICK_WINDOW:
            return <KickWindow />
        case types.KICK_SYSTEM:
            return <KickSystem />
        case types.BAN_MANAGEMENT:
            return <BanManagement />
        case types.USER_REPORTED:
            return <UserReported />
        case types.SETTING_BOX:
            return <SettingBox />
        case types.IGNORE_LIST:
            return <IgnoreList />
        case types.CREATE_GROUP:
            return <CreateGroup />
        case types.SEC_SYS_SETTING:
            return <SecSysSetting />
        case types.EXCEED_LIMIT:
            return <ExceedLimit />
        case types.SEC_WAIT_SYSTEM:
            return <SecWaitSystem />
        case types.SEND_ANNOUNCEMENT:
            return <SendAnnouncement />
        case types.ANNOUNCEMENT_MSG:
            return <AnnouncementMsg />
        case types.FRIEND_REQUEST:
            return <FriendRequest />
        case types.CAMERA_MIC:
            return <CameraMic />
        case types.COUNTRY_BAN:
            return <CountryBan />
        case types.BANNED_SYS_MSG:
            return <BannedSysMsg />
        case types.PRIVATE_MSG_REQ:
            return <PrivateMsgRec />
        case types.MY_ACCOUNT:
            return <MyAccount />
        case types.NOTICE:
            return <Notice />
        case types.VIRTUAL_CURRENCY_SHOP:
            return <VCurrencyShop />
        case types.OPEN_CHAT:
            return <OpenChatPopup />
        case types.VIDEO_BOX1:
            return <VideoBox1 />
        case types.VIDEO_BOX:
            return <VideoBox />
        case types.PRIVATE_CHAT:
            return <PrivateChatPopup />
        case types.GROUP_CONVERSATION:
            return <GroupConversation />
        case types.GROUP_CONVERSATION_FULL:
            return <GroupConverstationFull />
        case types.UPGRADE_ROOM:
            return <UpgradeRoom />
        case types.DELETE:
            return <Delete />
        case types.REPORT:
            return <Report />
        case types.EXIT:
            return <Exit />
        case types.CHANGE_GROUP_NAME:
            return <ChangeGroupName />
        case types.LOG_OUT:
            return <Logout />
        case types.ABOUT_APP:
            return <AboutApp />
        case types.TERMS_AND_CONDITION:
            return <TermsAndCondition />
        case types.CONTACT_US:
            return <ContactUs />
        case types.HELP:
            return <Help />
        case types.OPEN_CHAT_MENU:
            return <OpenChatMenu />
        default:
            return null
    }
};


export default connect(
    state => ({
        modalName: state.modals.modalName
    }),
    null
)(ModalConductor);
