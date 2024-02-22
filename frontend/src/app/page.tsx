"use client";

import { Button, Card } from "flowbite-react";
import { FormikProvider, useFormik } from "formik";
import Form, { Filedset, Input } from "~/components/Form";
import yup from "~/utils/yup";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      texto: "",
      cor: "",
    },
    onSubmit: () => {},
    validationSchema: yup.object().shape({
      texto: yup.string().required(),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Card className="w-fit">
        <Form>
          <Filedset legenda="Informações gerais">
            <Input name="texto" label="Texto" />
            <Input name="cor" label="Cor" />
          </Filedset>
          <Button type="submit">Submit</Button>
          <Button type="reset" color="gray" disabled={!formik.dirty}>
            Resetar
          </Button>
        </Form>
      </Card>
    </FormikProvider>
  );
}
