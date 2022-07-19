import { messages } from 'joi-translation-pt-br';

const handleValidation = (object: any, objectSchema: any) => {
	const objectError = objectSchema.validate(object, { messages }).error;
	const errorMessage = objectError?.details?.[0]?.message;
	const error = errorMessage ? improveErrorText(errorMessage) : null;
	
	return {
		isValid: !objectError,
		error
	};
};

const improveErrorText = (errorStr: string) => {
	const strReplaces = [
		['name', 'Nome'],
		['email', 'E-mail'],
		['img', 'Url da imagem'],
		['phone', 'Número de telefone'],
	];

	return strReplaces.reduce((acc, rep) => acc.replace(rep[0], rep[1]), errorStr);
};

export {
	handleValidation,
};
