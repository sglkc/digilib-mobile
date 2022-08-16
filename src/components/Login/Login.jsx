import {
	Button, StyleSheet, Image, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Modal from '@/components/Login/Modal';

export default function () {
	return (
		<View style={styles.container}>
			<Modal />
			<Image
				source={require('assets/logo.png')}
				style={styles.image}
			/>
			<TextInput placeholder="Email" style={styles.input}	/>
			<View style={styles.passwordContainer}>
				<TextInput
					placeholder="Kata Sandi"
					style={styles.input}
				/>
				<Image
					source={require('assets/eye-slash.png')}
					style={styles.passwordIcon}
				/>
			</View>
			<Text style={styles.text}>Lupa Kata Sandi?</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>
					Masuk
				</Text>
			</TouchableOpacity>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontSize: 18, marginEnd: 8 }}>
					Belum punya akun?
				</Text>
				<TouchableOpacity>
					<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
						Daftar Sekarang
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: 200,
		width: 200,
		marginTop: 50,
		marginBottom: 50,
	},
	passwordContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		position: 'relative',
	},
	passwordIcon: {
		marginEnd: 16,
		width: 28,
		height: 28,
		color: '#000000',
		position: 'absolute',
		right: 0,
	},
	input: {
		marginVertical: 12,
		paddingVertical: 12,
		paddingHorizontal: 32,
		backgroundColor: '#ddd',
		borderRadius: 32,
		width: '100%',
		fontSize: 16,
	},
	text: {
		alignSelf: 'flex-end',
		fontSize: 16,
	},
	button: {
		marginTop: 32,
		marginBottom: 24,
		paddingVertical: 16,
		borderRadius: 32,
		width: '100%',
		backgroundColor: 'orange',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	}
});
