import { useState } from "react";
import { SafeAreaView } from "react-native";
import TextInputComponent from "../../components/TextInputComponent";
import { StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.welcomeText} variant="headlineLarge">
        Bem vindo ao Remedie
      </Text>
      <TextInput
        style={styles.textSpacer}
        label={"Login"}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        style={styles.textSpacer}
        label={"Senha"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        style={[styles.passResetColor, styles.textSpacer]}
        variant="titleSmall"
      >
        Esqueci minha senha
      </Text>
      <Button
        style={styles.buttonMargin}
        mode="contained"
        onPress={props.logar}
      >
        Entrar
      </Button>
      <Text
        style={[styles.createAccount, styles.textSpacer]}
        variant="titleSmall"
      >
        Ainda não tem uma conta?
      </Text>
      <Text
        style={[styles.createAccount, styles.actionText]}
        variant="titleSmall"
        onPress={() => {}}
      >
        Criar conta
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    margin: 24,
  },
  textSpacer: {
    marginTop: 20,
  },
  buttonMargin: {
    marginTop: 20,
    marginStart: 30,
    marginEnd: 30,
    borderRadius: 10,
    backgroundColor: "#005AFF",
  },

  passResetColor: {
    color: "rgba(0, 0, 0, 0.61)",
  },
  createAccount: {
    textAlign: "center",
  },
  actionText: {
    color: "#005AFF",
  },
  welcomeText: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Login;
