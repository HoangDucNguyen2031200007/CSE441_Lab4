import { StyleSheet, View } from "react-native";
import ContactThum from "./ContactThum";
import { IconButton } from "react-native-paper";

const ProfileContact = ({ route }) => {
    const {contact} = route.params;
    const {id, avatar, name, email, phone, cell, favorite} = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                
                <View style={{ alignItems: "center"}}>
                    <IconButton icon={favorite==true?"camera":"account-alert-outline"}
                                iconColor="#663399"
                                size={20}
                                onPress={() => {
                                    // updateFavorite();
                                }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'blue',
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ProfileContact;