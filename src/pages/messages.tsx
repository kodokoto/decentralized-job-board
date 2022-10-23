import { ActionIcon, Input, Popover, NumberInput, TextInput, Button } from "@mantine/core";
import { IconCirclePlus, IconSettings } from '@tabler/icons';
import { useState } from "react";

export default function MessageHub() {

    const [show, setShow] = useState(false)

    return (
        <>
            <main className='flex flex-col justify-end align-end h-[100vh] '>
                <section>

                </section>
                <section className='flex flex-row m-8 justify-center items-center'>
                    <TextInput
                    placeholder="Send message"
                    radius="xl"
                    />

                    <Popover position="top" withArrow>
                        <Popover.Target>
                            <ActionIcon variant="filled" size={64}><IconCirclePlus size={32} /></ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown style={{maxWidth: '30vw'}}>
                            <NumberInput
                                defaultValue={18}
                                placeholder="Your age"
                                label="Contract ammount"
                            />
                            <Button>Send offer</Button>
                        </Popover.Dropdown>
                    </Popover>
                </section>
            </main>

        </>
    )
}

// 3a3678
