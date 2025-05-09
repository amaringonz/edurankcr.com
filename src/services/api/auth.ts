import axios from 'axios';

import { getTokenFromCookie } from '@/services';
import { Env } from '@/services/config/env';

const api = axios.create({
  baseURL: Env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export async function postAuthentication(identifier: string, password: string) {
  return await api.post('/auth/login', {
    Identifier: identifier,
    Password: password,
  });
}

export async function postRegister(
  name: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  birthDate: Date,
) {
  return await api.post('/auth/register', {
    Name: name,
    LastName: lastName,
    UserName: userName,
    Email: email,
    Password: password,
    BirthDate: birthDate,
  });
}

export async function postRequestEmailVerification(email: string) {
  return await api.post('/auth/email/send-verification', { Email: email });
}

export async function getVerifyEmail(token: string) {
  return await api.post('/auth/email/confirm-verification', { Token: token });
}

export async function postForgotPassword(identifier: string) {
  return await api.post('/auth/password/reset-request', { Identifier: identifier });
}

export async function postResetPassword(tokenId: string, newPassword: string) {
  return await api.post('/auth/password/reset', { Token: tokenId, NewPassword: newPassword });
}

export async function putUserProfile({
  Name,
  LastName,
  UserName,
  BirthDate,
  Biography,
}: {
  Name?: string;
  LastName?: string;
  UserName?: string;
  BirthDate?: Date;
  Biography?: string;
}) {
  return await api.put('/account/profile', {
    Name,
    LastName,
    UserName,
    DateOfBirth: BirthDate,
    Biography,
  });
}

export async function putRequestEmailChange(NewEmail: string) {
  return await api.put('/account/email', { NewEmail });
}

export async function deleteRequestEmailChange() {
  return await api.delete('/account/email');
}

export async function getVerifyEmailChange(token: string) {
  return await api.post('/account/email/verify', { Token: token });
}

export async function putUserAvatar(Avatar: File) {
  const formData = new FormData();
  formData.append('Avatar', Avatar);

  return await api.put('/profile/change-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function postChangePassword(currentPassword: string, newPassword: string) {
  return await api.post('/password/change', {
    CurrentPassword: currentPassword,
    NewPassword: newPassword,
  });
}

export async function postAddInstitute(
  Name: string,
  Type: number,
  Province: number,
  Url?: string,
) {
  return await api.post('/institute', {
    Name,
    Type,
    Province,
    Url,
  });
}

export async function getInstituteSummary(id: string) {
  return await api.get(`/institutions/${id}/summary`);
}

export async function fetchLastActivity() {
  return await api.get('/activity/latest');
}

export async function getSearch(name: string) {
  return await api.get('/search', {
    params: { Name: name },
  });
}

export async function getInstitutionRatings(id: string) {
  return await api.get(`/institutions/${id}/ratings`);
}
