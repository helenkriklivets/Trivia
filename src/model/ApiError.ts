class ApiError {
    public status: number;
    public message: string;

    public static axiosError(err): ApiError {
        const ae = new ApiError();
        if (err && err.data) {
            ae.message = err.data.message;
        } else {
            ae.status = -1;
            ae.message = 'Unknown error';
        }
        return ae;
    }
}

export default ApiError;
