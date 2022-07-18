import React from 'react';
import { useState } from 'react';

import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography
} from '@mui/material';

import SearchContact from './searchContact';
import CreateContact from './createContact';
import EditContact from './editContact';
import DeleteContact from './deleteContact';

export interface Contact {
	img: string;
	name: string;
	email: string;
	phone: string;
}

const ContactList = () => {
	const [contacts, setContacts] = useState<Contact[]>(
		[
			{
				img: 'https://i.pinimg.com/originals/2a/a3/dc/2aa3dc83ca678179031a867cb7119826.jpg',
				name: 'ue',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBocHBgcGh4eHBweHh4aGhwcHhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQhJCQ0MTQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0MT80NDE/MTE0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAD8QAAEDAAcGBAUDAwMDBQEAAAEAAhEDBBIhMUFRBWFxgZHwobHB0QYTIjLhQlLxFHKCM2KSI6LiNUNjssIV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJREAAgIDAQABBAIDAAAAAAAAAAECEQMhMRJBBCJRYRNxFDJS/9oADAMBAAIRAxEAPwDzPklx6Ic7EplrNcCHwl4prHApTchgOkICZaCW1oigNBsjZ1FTUV7bLmkguab9xjNRVv4ce37HB40wKi+Gq1ZpLGT7ueI9VsQO+v46LHkyShL9M0QipRPPaageyQ9pbxHqo16HSUbXSHAEHUSPFVNY+HaJ/wBpLDuw6LuH1EX3QpYWnoq/hejmlcf2s8zd5LVkXA8lV7F2YaG2S4OmAIuuGvVWpExCz55KUrRXHFxjsa+jDmkOAINxBz3LGbW2WaF0i9hwJ/T/ALT7ragXmdPdMpKFrmlr2yDkRlwSxZHB/oc4ekZ/4aqA/wBVwvwZu1d7LRxomtYAB9IgXAeycDr3zSnP1KwjFRVCWY7HeazvxVVrmUg3tPmFom33HDKO+C56/VBSscwkicwJghGKXmSYTj6jRgR6qyqOxqSkvs2W/ud6BaSo7Io6O8C0+PudeeIGXJWLz5dPFXn9T8RJRw/9FXU9iUbACWh7tXYcgrMwBfl0SNXBtys2KF2rvpHPHwUE5TkkyrUYoyVfrBe97zmbuAuHkoCklG9eklSoxt27ABEJJ76pbX8piC5F+Sa5yQG9AD5GnfRKi3x6FC6A5ZQSpvlJBRoAiBRKkFHvCX5a5tAREpb8e71L8g6HogVcnIxwKXpDpjGUha4OBvaQRyXo1Vpg9jXtwcGmON56Lz5lTecGPP8AifZa34aD20ZY9jgGu+mREh15HI+az/UpON3wthbTouCTJCdOveaCbzuTQd+7D14LCaRWuv3dUNuvHfdyVozjvS5APeG/DmUAN3oJSzv65IlAMQtTmnUJsT175pzhdd6oAaBz3pW4lJ33qidwQMNb/wCEPuKW1+UpMeiBBE496rHfFVatPDAbmC/ifx5rYg+6zu0fh4Pc57Hw5xvDhIJ3EYK2CUYyuRPKm1SMphmkk6qzrWxKZgksJGrfqHQXhcPyr16CmpcMri10iDkElS/JQaMrqzkgTipXMRY6osCK3xSp9jeOqEWBOERekcc0vqubA6ajWgw/Yx4mSHC/kclpKptOhfDQGsdo4AeOayQO4Ix3riWNSO4ycT0INzyPDqEp/jqsPVdpUlH9rrv2uvCvap8QsdAeLB/cL2+4xWSeGcebLxyRfS6kz5JXdYUdFSNeLTSCNQQfJSNaMrlndrpZU+CDJKTf33mgHsX+KQHPdjnogYhw5pQTn3xRBwSEAd9UhAcOCcfyku7uTYMX/wAJgKBhu3970QUjd3c3J06pAF3MJRl3xSbygzGN+uqYA0HA99whDTuTTxSAdj5IOIKUd4d5pjSEwsfP48lzVup0dJc9gO8Y8ZU5y5enqh5AkzAGdyabvQmk+lDWfhwXlj4/2u8L1Q1yqvo3BrwAdxlXm0dvYsoh/md37R7qhfJJLnSTmcSt+L3X3GXJ5vRGGohKRolIViQ2UJbPc/hCAFAyQQnNEaocJ5JWMaUoHffBFmTeUWY/jw80AIF3bN2a+lP03MBvefIarv2ZsUuh9Lc04MzdxOQ3LR0bIAAAAGAFw4LPlzJaj0tDE3tkFTqTKNtljY1OZ4ldJOBuSOByxSQsTbbtmlKtDydya4XRoi0dLkG7l32UDYAg7woqekDWOd+0E+EhOoaQOAImDhwXJTH5lI1gva36nbzgGnxPJdxj6lQv2d9G6Q10XOAPVJEZXdx3uXPUhAcwm9ji31Hgpw4TE8I5pSXmTQ+i+yRBd0QTdpv07hciFtCTeLheNJ970rTu3qsaxzHtpDhSGDuB+w8sOasiN+uWHqu5R8ggnvvehzrpuKY+lDYDiBJsibpJw6p7nLigFwvP8FAb5ofh6+6JQFHLtGvCiYHOBIJgADPKTyWVr20H0n3mG5NGH5Wup6Br2Fjr2nL1lYXa9SfQPsky0/a7dv0K1fTqL/shm9fHBUR/KrzSnVKaU6rZ5M9neR33xRCrzSnVHzDqmogd3yzqOqFw/MKVFCLCeiIyUw3YJvPw7hTs6ojo2FxAaJJ7ngtHs6o0dHDnG0/hcNw371QFg05/lOs6E9TvXE05KrKQcY7aNUa4NMsyIUdPtHVzW3ZETqss9gg75UGyqp8ymYzKZJ3C8+Sl/Aqtsqs9aSN5VwbMzJN6mtJrYyUIpf8AqWMiy0P+RB5LLVlbJyuLaNM4CwJtP+mdB+IK6qWksicTpvVfUXNfTEkj6fpAJvJN7j6ciu8cfUhvg+ipbFG1mES3gAceMKfYtDi8zLr40F4aOgHUrhrYmkez9zujYBPtzWgqzA1gbqJ9h0WmEak2DqivpPpp3ZB7QeYu9lx1etf9d7b4gR5e3Vd+2mEWHAYGz/y9JHiqprAW2wbw9wdf+m5gn/jPJcThbbCL0XDDxlQ094Df1OIbHn0ClojaAIxjEJlWNqmN/wBNGIu/c7HoAo443JIUtdJNp1a1Rlo0gbo+07oN6gqVOXsDj9wEEbxcfFPru1WNtMEvcZENIid5NyqNn1ote+Yu+qBBuON8agnmr5o2tAjr2kwva7/4xI/vAtDoB/3Ltq1PbaCNBPNcFXr5+W4Gjm0S4lrhN50PLPJM2XWIBmbMkEEX3G67hCnOP2qvgaRbWhOPAd44hKGriqItl1KTibLNzRj1d5LttdhRaoQx7w2Mjhx7hQ16qMpWFrxI1GR1BRtAgMc6LVkWvA3Dos7Q/EDReA9vQ+qpCMnuIpONVJlHtTZ76F9h+GLXZOHvguSFrK7tWgpmWHmMw4AhwN8FZd7ACRIMZ5Fb8cm1tUzHOKT07GSkTi0JQ3iqnJHIQpZSoAuGs3JCOilAk5xikLO/ys1ndEbQgCSpAksZZnrzRYURvwKtfhSplrXUhH3yBwB91XuZahoxcQ0c81p7Qo2NaLrIgDDdJU8sqjX5KY4XKzpGg6LjrFKG0zCcLB8/yFPQXttG8uv5arm2h9zP8284Bz4LLFbo06shrNKSbsZho9fVTUexTYFl2+HCRMyTOIzSbOoS91rITB3ZmPBdVe2g/wCY2r0DQ6lIkk3tYDgSBiTotmHHo5ySSK//APj0rX2mlpJzDjdugjgu0UVZFzqRjT1VLtllYY+x/U0j6SJcGw1rZwBhLUaeuCQ8GlAaHljgLZZhbY8fdzlXeGS2QWeN0WFfqryxz30xeWC2GAQ0xffnkVNUKoz+nLP1uY179ZeC7oJjkpKu+2xr2SWuyzBwIIyhdgF7DGRY7gcOhHipq+MtS6iqqVassM9d4uPouiq1QuoQC8stkvdFziDgJyuAXDWKD6zRxAeRGUA/f4T1WkewxA4bhuU4Q8ts6btFXQsYy5jGgakSeJJzTX7OLy10CAfq1c3GOqSvUxY4MYy3TO+1p+1gze8/tF2iz39c97iXUtYfBvcwtYz/ABbiQFaOOUtkcmaMdGtpNnUZE2bJH6m3H2KpH1d7aSwbzSXNdEYXEngF1MqFZawUtXrBp2QDYpBfGlrEHJd+ytoMp22wwte0lrmm8tOcFOeGuhDKpcOepMstLB+l7m+PsuiYyuuTGXOfpbPiGn1Txw43rzp6kyqYj2g3br++8F51XqCw97MgTHDLwW9dSlrzN7TBPldzWb+LatZex4wcI1vGHgrfTSp1+SeaP22UCbCS2EtoL0DILggJoISlyAJIGnghNt7/ADQgC9DSe+7kGc1Jx1Q5mXmsjZooYG7iUhYU9ze96dY79kWFD6lSNY8vdH0i7+47uC4a1tF9M8MZIa5wG8yYngpH0QFo3nOT0SfC9AHUxe77WNLuZuHqnSSbYenqKNbS/Q0AbmNGRyF64azQPfbZbBcx7XSP0tc0g3cylqlbbSViG32GuIGUm4cc06hq5Y8NOL2G0f3OBtHj9zlKMPK9PpYsNjMiiYRmFJs+q/LrTqVuFK2y++8Fv2uE5ZHkjZn+kzh6wOC6QNO/yFphLzTRzKPpUzP/ABPs57KZ77L3MpYNtoJskAAtMYYLt+E6rSGk+a8PDGMsMtgguvkkAibOF5VjSUJJm3SM/spHNB4jBIyig/6lKeNI48FpWdfgyf4r9XYNqYZSUtm5j3B0DCSIdCmjzSOJN5M+P8poHPvxWeTt2bIR8qhtJQtLw8gFzQQ053p7RAAQBfCQuB9O/ZIYVXZYeysHB9KHstA3taRZaNwz5rDyaJzWuD2PZcWWSbRGYuvBhbqJBEkTm0lp4yOaidRuP/uUnG2fPFaIZlFUZMn07lK7JdkikZVnPeB8x5e8MNwBd9o3b+a49nVIUTLIMkkucf3OcZJ6lTso4M2nOMRL3FxjHPgpCfFTyZPRXFi8nA8Q9/8Ac0xGrW+yh+c+XQyWNN5BE7zGakpXgPpCRcLPgyVHsmipLnWiWvkua43Cb/pGSw/x+pOyxUfEVadRFj2w5jpaRlk4EHXHouKt1ptPQODcWfUG/qGsDRdu0KK3V6SjOLHOLP8AEm7pKxrSRhPJXxQTX7RLJKS18MIQEFqA1aTOCOCHMQEAJYOhSpbAQgRpJvuCeMYRHWewnt/KxGmhLPpdmmnvmpJSPnvqlYURU4Fk3ZKnZXixhYy4udLjnoAOSu6ZlxnRZp+PNXxU0yc7i9F18I1kMrAB/W0t54j1V9tB7hTh5v8Alvh25jwIMd5rDgwbjGhHgtls6tf1VGb4p2MsnR7cp98jxXU42dY56ou6g8/LaGtLjLhiABDj1U5LzhYHEk/zkuDYFPFAS+AWveHTkQb13itF17GuO8iB1K5qtFlwcwv/AFRdpPqnnXcm0VozaAHAz6J7BgEIYIj8pCRKZTUzWAScUwJLWCQHco/nMxtCAn0dIHAkGfVK0ApJm7+E15ODSAdSE+U2kkj6YB3z5JgROY8frHCxw34J7Q/GWEHdHHNNtvbi2Rq0yeh7uTqOnaRLSCM92eGS5VAUG1K1fStafqc9jGjWGtLgOVyuaCutax7jcKPEnDCVQbMqz6Sle9ogXw8gEAuvdZGboELi+KNotA/p6L7Wn6z+528/qvxXUY7snKVIrGbZeHOJALXOcYOUkm481XPIkxcJPRI5196NyoopbRncm+g5IiynSujkbCaEp3IKAF7yQizxQkBqHdU5ogTKeWZ8fZDW9+CwWbUgnvFLecevfdyA3vvgnWN4G9Kx0QUo+kwciFmH4laqlbcYJwKyj4nmtOB9M+XoQp6lWn0T2vYfqB5EHEHUKABIrEl09H2VSW3vtNaJsvAAukiCb88FbkxELMVasWAx+gE/2kCffktDTUsAECSYDRrpy3qEZWtm5qhaR4bE3E4a8k/019FEyhgyTLjidNw3eakldJiFLtyjrFA1wgiR7p5Stam9gV76iSIMWeK7aGhDWhrQAAnl6OHFJJIbYDj7prycrzpMeN6dKTFMQxlOLUOBYTgHehwKg2nSNYxxdDZhs4fddiul9GHAh0EGLj5qmr75fYDiQwf90YTnA81xKXlWNK9HFtzbQomNo6DMEWwPpAwNmcXLGkknxVht+mtUsXQ0AcM1X8FaDtJsyZH91DZSygIPdy7JhCUJqcgBpKQJTekQA61vSqOUIA2RzB9x1TTN2nXvJPOaQtyzj1XmnoMRpCkBkX3/AISAGfRIHd97kAiOmP0kTkspSYnitZWAYPBZN5vK04PkzZ+gmpQiVpIFztKuQyjYMbLXHlgCtXsOuA2WOOX0E5tP6J1Ec7l54TqtTsakt0LQT9stxggi9p4wVnmvCtGrFL06ZsnBMtd8lX7M2kH/AEPEPkhrsnRnx3Ky5ZJrZQa8XXG8qMUTpveZ3NAHup239ME0gT6IaAibROP6zOhg79JT2FwF8HeJHgnkIOKKAGn0E89EoHfuksx7eyirNMGC0eQzJ04lMCDaVasNAH3ukNEYRi47gOtyyldrNh9G2dXOM3mZx3krtpK19bi8wXODWtyF02R7rL7QrFukc6bpgcBgpxTlLfBTmox10hp6S05zjmSUzJJCctBjbsChBKAuhBCCkJShADeMJCnFNKAGwUqWyd3VCANk8Xwb0Fvv33mgDQzxS5996LzT0AIx18eEBHn3lzQkA/lAxlM36SFk6QfUeK1dKLiOUrLPH1FacHyZs/RhSolBWkgEKWirbmCBN7g7/iowUx5XLSY02no2+yXtfRzk5zjndvG9WVXrdkhjzI/S/I7n6Hfgqf4ZE0A0tO81aQI1GER4FZ2/LNsfuimW5A3Yfwizcqqr0z2XN+pg/ScRwd7rpbtFmctOhafMXLtSTBqjtAzv5eqQBc5r9H+7wKiptoD9DSbsTc0b96G0KjorFMGC07k0YuOg6KtfaebT8chNzd3HUpAwklznFzsJyA3aJznQCTgB5BcN2dpUYnatMXUz4uh13kuFOe6XE6knxlNWiKpGCTtiN8EFJCcF0cghCEACEBIAgYqYnFNKBBaPce6Els7kIA2YbN5158EOEDud/gnm6/xSTfOvsvMPRGBK4iMPZPIjv0TDkccPU4aIChtLEGJWUfieK1dMLncFk3m8rVgM2b4EQlakC0kATSnSpqrU30j7LBJzOTd50StIKb4aj4auoBj9zlbmI7z8FwbHq9hliZhzhK7gFln09CCqKAmRehuSdcMk14y4/wA+K5OwyRccJ0CVve9I7OOqYAcZ8zloubaj7NE86NPOV0gYDh5rn2hVTSMLJLQYv05Ij05lzRghhCAF016pvonWXDgcjw8FzytSdnntNPYIASAJV0ISeeSVWLNmghsvvdOAkQBoPPemP2Y/9MEROl29AHDvTV0UlVc2JvEEyDNwEnwI6qEoAExOKQlADY3hCfA0QgRsyNEBvJPLMkntmvLPSGxldjjh5JLN5mE9zMNZ79kgGeQ79UxEFN9nJZV+JWurEBriYiMZWTdeTdmtODhmzPYyEWZwvOUYpwYvQdgVSibQ0b2MALmNJdEm1Em871obolFenRi9j7MNNTCjcSzEuu+qBkJzvW9oNmMYwMY2yB1J1JzKpZsbSk/rbwxH/itQRiuJbL440VT6AtN4v3ee9Avi8gZ6c1Z3Z8+yuZ9UBwu175qTj+C6kcYG7+U4cpUrqo4b+CjdRmcDPBc0zq0Njz6IA808MOMJG1ZxyMdlFMLGWcsu/ZA0xv78F1sqhN5N3ffNdLaINuEDWU1GxNnFT7KZSMs0jZBw1G8HJYzbXw++gJI+tmTxlucBhxXofcplLAaS6IAMg81WLrRCcVLZ5RjKQK92TsP+pFI8PsQ6G3SDn4XLg2rsx9A8NfBkSCDiOCrZmcWlZxTv1Ugp3jBzupUaAmIkdWXkEFxIN5G+4eQHRRG9BQgBCklKSklABJ0Qi7VCBG5aBdA8j4FI+NbtcO/wqOs7acfsFkanH8KspaV7z9TifJY44G+mqWdLho6faVG3OTo2/wAVXVnbDzcxoaNTefZVYCCVaOGKIyyyYtLTOd9zi7jlyTSgBEKiVcJt30Vq2fwhW7VEaMm+jMgf7XTBHOVjAuvZVfNDSNe3g4atzCJKzqEvMjRfE5sVigptDB4T7ErT+uazu3qZlYqznMc0lkOj9QyMjmrLYda+ZQMfnZh39zbiuHw0QatlkB3ikz73+yRu7qUc9PJIoOKLWKQn8pAfNAAYn895BOBzuTc0QgB1o97t6RvNIMLkA4z0QAMdv/MKt+JK1YqzzgT9I4lWJCzPxM/5tNRVcX3hzu+EoXTmbpFn8NVWxVmA4ul54m/yhZf4rrFqsFoNzGhvPE+YWx2hW2UFHbdH03NbOJwAG/BecUlIXOLiZc4kniV3FbI5HUUhhGRwSFmf8JUoXZEjDSPwhxUhSOagLI00BPezxTS1ABCVNtbihAEzUr8+IQhJdEIUHvxQhD6MjOJ5KV+PIIQhANfglGHX0QhAMlocXf2nyWy+Cv8AQd/e/wAglQuGWh0vx6JDj08kIXJoQMx71TmYn/D/AOoQhDAT/wAkNxHH3QhADzgefkU12I5IQgCQ5cB6rH1b/wBSPD/8hCF0ieT4G/HmNF/a/wBFltUiE4kcv+wuQ4eya/BCF2TFalGKRCABvqnZFKhADEIQgD//2Q==',
				name: 'sei la',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'uee',
				name: 'nada',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'uee',
				name: 'nads',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'uee',
				name: 'sem futuro',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'uee',
				name: 'ueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
				email: 'ue@ue.com',
				phone: '99999999'
			},
			{
				img: 'uee',
				name: 'f',
				email: 'ue@ue.com',
				phone: '99999999'
			}
		]
	);
	const [value, setValue] = React.useState<Contact | null>(null);

	return (
		<>
			<CreateContact />

			<SearchContact
				contacts={contacts}
				value={value}
				setValue={setValue}
			/>
			
			{
				(value ? [value] : contacts).map((contact) => (
					<Box
						sx={{
							mt: 2,
							mx: 'auto',
							boxShadow: '0 4px 4px rgba(0,0,0,0.3)',
							'maxWidth': {
								maxWidth: 600,
								flexWrap: 'wrap',
								flexDirection: 'row',
								display: 'flex'
							},
							borderRadius: 4,
							'&:last-child': {
								mb: 6,
							},
							display: 'flex',
						}}
					>
						<List sx={{ width: '100%', bgcolor: 'background.paper' }}>

							<ListItem>
								<ListItemAvatar sx={{ minWidth: 65 }}>
									<Avatar 
										alt='contact-avatar' 
										src={contact?.img} 
										sx={{ width: 50, height: 50 }} 
									/>
								</ListItemAvatar>

								<ListItemText
									sx={{ wordWrap: 'break-word' }}

									primary={contact?.name}
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'block', wordWrap: 'break-word' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{contact?.email}
											</Typography>

											<Typography
												sx={{ display: 'block' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{contact?.phone}
											</Typography>
										</React.Fragment>
									}
								/>

								<EditContact />
								<DeleteContact />
							</ListItem>
						</List>
					</Box>
				))
			}
		</>
	);
};

export default ContactList;
