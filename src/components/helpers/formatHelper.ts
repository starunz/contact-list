const formatPhoneNumber = (phone: string) => {
	const have11digits = Boolean(phone.length === 11);

	const startIdx = 0;
	const middleStartIdx = 2;
	const middleEndIdx = have11digits ? middleStartIdx + 5 : middleStartIdx + 4;
	const endIndex = phone.length;

	const ddd = phone.slice(startIdx, middleStartIdx);
	const startPhone = phone.slice(middleStartIdx, middleEndIdx);
	const endPhone = phone.slice(middleEndIdx, endIndex);
	
	return `(${ddd}) ${startPhone}-${endPhone}`;
};

export {
	formatPhoneNumber,
};