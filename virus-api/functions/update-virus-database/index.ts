import { ExecException, exec } from "child_process"

const runFreshClam = async (): Promise<void> => {
  console.log("Running freshclam to download virus database files...")

  return new Promise<void>((resolve, reject) => {
    exec("/bin/freshclam", (error: ExecException, stdout: string, stderr: string) => {
      console.log("Output", stdout)

      if (stderr) console.warn(stderr)

      if (error) {
        console.error(error)

        reject()
      }
      else {
        resolve()
      }
    })
  })
}

export default async (): Promise<void> => {
  await runFreshClam()

  console.log("TODO: Copy database files into S3 bucket")
  // Files are stored in /var/lib/clamav/*.cvd
}
