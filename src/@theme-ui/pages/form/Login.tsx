'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Link,
  ModernInput,
  Stack,
  Text,
} from '@theme/components';
import { postAuthentication } from '@theme/services';
import { LoginValidation } from '@theme/validations';
import { FormDisclaimers, HeadingForm } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import { Routes } from '@/routes';

export const Login = () => {
  const dictionary = useTranslations('UI');

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Identifier: '',
      Password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof LoginValidation>) {
    const { Identifier, Password } = values;

    try {
      await postAuthentication(Identifier, Password);
    } catch (error: any) {
      const { response } = error;
      switch (response.status) {
        case 404:
          form.setError('Identifier', {
            type: 'manual',
            message: dictionary('Errors.User.404'),
          });
          break;
        case 403:
          form.setError('Identifier', {
            type: 'manual',
            message: dictionary.rich('Errors.User.403', {
              link: chunks => (
                <Link
                  href={Routes.Guest.Email.Request}
                  text={{ underline: true, color: 'neon' }}
                >
                  {chunks}
                </Link>
              ),
            }),
          } as any);
          break;
        case 401:
          switch (response.data.code) {
            case 'Auth.InvalidCred':
              form.setError('Identifier', {
                type: 'manual',
                message: dictionary('Errors.Auth.InvalidCred'),
              });
              break;
            default:
              toast.error(dictionary('Errors.General.500'));
          }
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  return (
    <>
      <HeadingForm>
        {dictionary('Heading.form_login')}
        <br />
        {dictionary('Heading.form_login_two')}
      </HeadingForm>
      <Form {...form}>
        <Stack asChild>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="Identifier"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <ModernInput
                      placeholder={dictionary('Input.Identifier.placeholder')}
                      autoComplete="username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <ModernInput
                      placeholder={dictionary('Input.Password.placeholder')}
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>
              {dictionary('Button.log_in')}
            </FormSubmit>
            <Button href={Routes.Global.ForgotPassword} bgColor="ghostInteractiveSecondary" height="lg">
              {dictionary('Button.forgot_password')}
            </Button>
            <Text align="center" color="secondary" weight="medium" wrap="balance">
              {dictionary('Paragraph.dont_have_account')}
              {' '}
              <Link href={Routes.Guest.Register} text={{ underline: true, color: 'primary' }}>
                {dictionary('Button.sign_up_free')}
              </Link>
            </Text>
          </form>
        </Stack>
      </Form>
      <FormDisclaimers dictionary={dictionary} />
    </>
  );
};
