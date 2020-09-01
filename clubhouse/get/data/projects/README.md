# Ritchie Formula

## command

```bash
rit clubhouse get data projects
```

## description

With this formula you can list your projects thrue CLI.

To use this formula you will have to first set you Clubhouse credential. To do this you should:

- Execute: 'Rit set credential'
- Add new credential
- Define your provider name: CLUBHOUSE
- Define your fiel name: TOKEN
- Select: secret
- add more fields? no

After that:
- Execute: 'Rit set credential'
- Select: Clubhouse
- Want to enter your credential typing or through a file? type
- Go to: https://app.clubhouse.io/ritchie/settings/account/api-tokens 
- Generate a TOKEN
- Paste the TOKEN IN the field TOKEN

----

Then execute *rit clubhouse get data projects*

If everything is ok you will receive all your active projects information (not archived)
