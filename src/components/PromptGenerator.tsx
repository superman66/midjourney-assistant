"use client";

import { cameras, lenses, lights } from "@/config/data";
import { useForm } from "@/hooks/useForm";
import { generatePickerData, getPhotographyPrompt } from "@/utils";
import { useState } from "react";
import {
  Form,
  ButtonToolbar,
  Button,
  CheckPicker,
  Grid,
  Col,
  Row,
  InputPicker,
} from "rsuite";
import Textarea from "./TextArea";

const initialFormValue = {
  scene: "",
  character: "",
  light: [],
  photographer: "",
  camera: "",
  lens: "",
  ar: "",
  elements: "",
};

export type FormValue = Partial<typeof initialFormValue>;

const cameraData = generatePickerData(cameras);
const lensData = generatePickerData(lenses);

export const PromptGenerator = () => {
  const [prompt, setPrompt] = useState<string>();
  const { formValue, onChange } = useForm<FormValue>(initialFormValue);

  const handleSubmit = () => {
    const prompt = getPhotographyPrompt(formValue);
    setPrompt(prompt);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Form
          className="w-[800px] rounded-lg border p-8"
          fluid
          formValue={formValue}
          onChange={onChange}
        >
          {prompt && <div className="mb-[30px]">Prompt：{prompt}</div>}
          <Grid fluid>
            <Row>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="scene">
                  <Form.ControlLabel>场景🏠</Form.ControlLabel>
                  <Form.Control name="scene" placeholder="请输入你想要的场景" />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="character">
                  <Form.ControlLabel>人物👧</Form.ControlLabel>
                  <Form.Control
                    name="character"
                    placeholder="请输入你想要的人物"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="light">
                  <Form.ControlLabel>光线🌝</Form.ControlLabel>
                  <Form.Control
                    name="light"
                    block
                    accepter={CheckPicker}
                    data={lights}
                    placeholder="请选择光线"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="photographer">
                  <Form.ControlLabel>摄影师风格📸</Form.ControlLabel>
                  <Form.Control
                    name="photographer"
                    block
                    accepter={InputPicker}
                    data={[]}
                    placeholder="请选择摄影师风格"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="camera">
                  <Form.ControlLabel>相机📷</Form.ControlLabel>
                  <Form.Control
                    name="camera"
                    block
                    accepter={InputPicker}
                    data={cameraData}
                    placeholder="请选择你想要使用的相机"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="lens">
                  <Form.ControlLabel>镜头🖲️</Form.ControlLabel>
                  <Form.Control
                    name="lens"
                    block
                    accepter={InputPicker}
                    data={lensData}
                    placeholder="请选择你想使用的镜头"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="ar">
                  <Form.ControlLabel>画面比例</Form.ControlLabel>
                  <Form.Control name="ar" placeholder="请选择输入画面比例" />
                </Form.Group>
              </Col>
              <Col xs={24} xsHidden className="mb-[10px]"></Col>
              <Col xs={12} className="mb-[10px]">
                <Form.Group controlId="elements">
                  <Form.ControlLabel>其他元素</Form.ControlLabel>
                  <Form.Control rows={5} name="elements" accepter={Textarea} />
                  <Form.HelpText>多个元素之间用英文逗号隔开</Form.HelpText>
                </Form.Group>
              </Col>
            </Row>
          </Grid>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" onClick={handleSubmit}>
                生成Prompt
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
