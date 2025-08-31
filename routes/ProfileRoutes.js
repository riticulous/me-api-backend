const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");  


router.post("/", async (req, res) => {
  const profile = await Profile.findOneAndUpdate({}, req.body, { upsert: true, new: true });
  res.json(profile);
});

router.get("/", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

router.get("/projects", async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne();
    if (!profile || !profile.projects) return res.json([]);

    let projects = profile.projects;
    if (skill) {
      projects = projects.filter((p) =>
        p.skills.some((s) => s.toLowerCase() === skill.toLowerCase())
      );
    }

    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/skills/top", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile || !profile.skills) return res.json([]);
    res.status(200).json(profile.skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: "Missing query param 'q'" });

    const profile = await Profile.findOne();
    if (!profile) return res.json([]);

    const term = q.toLowerCase();
    let results = [];

    if (profile.skills.some((s) => s.toLowerCase().includes(term))) {
      results.push({
        type: "skill",
        matches: profile.skills.filter((s) => s.toLowerCase().includes(term)),
      });
    }

    const matchedProjects = profile.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.skills.some((s) => s.toLowerCase().includes(term))
    );
    if (matchedProjects.length > 0) {
      results.push({ type: "projects", matches: matchedProjects });
    }

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
