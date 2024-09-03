## Build
```bash
bundle exec jekyll serve
```
## BioPage: [cnli.me](https://cnli.me/)
We thank [Chenshu wu](https://cswu.me/) for providing the design template of this webpage.

## Conference Tracker Page: [cnli.me/conference](https://cnli.me/conference/)
We thank [abhshkdz](https://aideadlin.es/?sub=ML,CV,NLP,RO,SP,DM) for the template of this Conference Tracker Page.

### Contributing
Contributions are very welcome!

Currently, I'm focusing on top-tier conferences in my research-related areas. Feel free to maintain a separate fork or send a pull request if you don't see your sub-field or conference of interest listed.

To add or update a deadline:
- Fork the repository
- Update `_data/conferences.yml`
- Make sure it has the `title`, `year`, `id`, `link`, `abstract_deadline`,`deadline`, `timezone`, `date`, `place`, `sub` attributes
    + See available timezone strings [here](https://momentjs.com/timezone/).
- Optionally add a `note` in case the conference has special notifications
- Send a pull request