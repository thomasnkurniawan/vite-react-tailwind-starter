import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Divider from '../components/ui/Divider'
import Loader from '../components/ui/Loader'
import MainLayout from '../layouts/MainLayout'
import { RiHeartFill } from '@remixicon/react'

export default function Home() {

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold manrope-800">UI Kit Preview</h1>
      <p className="mt-1 text-slate-500 manrope-400">
        React + Tailwind starter components
      </p>

      <Divider />

      {/* BUTTON */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <Divider />

      {/* INPUT */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Inputs</h2>
        <Input placeholder="Your name" />
        <Textarea placeholder="Your message" />
      </section>

      <Divider />

      {/* BADGE */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Badges</h2>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      <Divider />

      {/* CARD */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Card</h2>
        <Card>
          <h3 className="font-medium">Card Title</h3>
          <p className="text-sm text-slate-500">
            Simple card content preview
          </p>
        </Card>
      </section>

      <Divider />

      {/* LOADER */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Loader</h2>
        <Loader />
      </section>

      <Divider />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Icon</h2>
        <RiHeartFill
          size={36} // set custom `width` and `height`
          color="red" // set `fill` color
          className="my-icon" // add custom class name
        />
      </section>

      <Divider />

      {/* TYP */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold manrope-800">Typography</h2>
        <p className="manrope-200">Manrope 200</p>
        <p className="manrope-400">Manrope 400</p>
        <p className="manrope-800">Manrope 800</p>
      </section>

    </MainLayout>
  )
}
