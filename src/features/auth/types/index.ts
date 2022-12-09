export type UserValues = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	address_line_1: string;
	address_line_2: string;
	city: string;
	postcode: string;
};

export type UserResponse = {
	user: UserValues;
	jwt: string;
};

export type LoginRequest = {
	email: string;
	password: string;
};

export type RegistrationRequest = {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	confirmPassword: string;
};

export type UpdateInfoRequest = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	address_line_1: string;
	address_line_2?: string;
	city: string;
	postcode: string;
};

export type UpdateInfoResponse = {
	detail: string;
};

export type ChangePasswordRequest = {
	old_password: string;
	new_password: string;
};

export type ChangePasswordResponse = {
	detail: string;
};
